import React, { useState, useEffect } from "react"
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js"
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"

export default function CheckoutForm() {
  const [succeeded, setSucceeded] = useState(false)
  const [error, setError] = useState(null)
  const [processing, setProcessing] = useState("")
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState("")
  const stripe = useStripe()
  const elements = useElements()

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    window
      .fetch("/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
      })
      .then(res => {
        return res.json()
      })
      .then(data => {
        setClientSecret(data.clientSecret)
      })
  }, [])
  console.log(clientSecret)

  const handleChange = async event => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty)
    setError(event.error ? event.error.message : "")
  }

  const handleSubmit = async ev => {
    ev.preventDefault()
    setProcessing(true)

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          firstName: ev.target.firstName.value,
          lastName: ev.target.lastName.value,
          email: ev.target.email.value,
          zipCode: ev.target.zipCode.value,
        },
      },
    })

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`)
      setProcessing(false)
    } else {
      setError(null)
      setProcessing(false)
      setSucceeded(true)
    }
  }

  const donationAmounts = [
    {
      label: "50",
      value: "50",
      text: "Support those in need!",
    },
    {
      label: "100",
      value: "100",
      text: "Move the needle for an artist",
    },
    {
      label: "500",
      value: "500",
      text: "Support 1 month for 1 artist",
    },
    {
      label: "1500",
      value: "1500",
      text: "Support an artist for the full 3 months of support",
    },
    {
      label: "custom",
      value: "custom",
      text: "Enter custom amount",
    },
  ]

  const [state, setState] = useState({
    activeIndex: -1,
    selectedOption: "",
    checked: false,
  })

  return (
    <Formik
      initialValues={{
        customAmount: "",
        firstName: "",
        lastName: "",
        email: "",
        zipCode: "",
      }}
      validationSchema={Yup.object({
        customAmount: Yup.string(),
        // .required("Please enter a custom amount"),
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Required"),
        zipCode: Yup.number()
          .min(501, "Invalid zip code.")
          .max(99950, "Invalid zip code.")
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
      }}
      // onSubmit={handleSubmit}
    >
      <Form>
        <section className="amount">
          <h2>Choose Amount</h2>
          <fieldset className="amount-check">
            {donationAmounts.map((d, index) => {
              const handleOptionChange = changeEvent => {
                setState({
                  activeIndex: index,
                  selectedOption: changeEvent.target.value,
                  checked: true,
                })
              }

              const renderSwitch = param => {
                switch (param) {
                  default:
                    return (
                      <>
                        <span>${d.label}</span>
                        <p>{d.text}</p>
                      </>
                    )
                  case "custom":
                    return (
                      <>
                        <Field
                          name="customAmount"
                          type="text"
                          placeholder="Custom Amount"
                        />
                        <p className="error" style={{ margin: "0" }}>
                          <ErrorMessage name="customAmount" />
                        </p>
                      </>
                    )
                }
              }

              return (
                <label
                  key={index}
                  className={
                    index === state.activeIndex ? "checkbox active" : "checkbox"
                  }
                >
                  <input
                    name={d.name}
                    value={d.value}
                    type="radio"
                    checked={state.selectedOption === d.value}
                    onChange={handleOptionChange}
                  />
                  <div className="d-flex">{renderSwitch(d.value)}</div>
                </label>
              )
            })}
          </fieldset>
          <fieldset>
            <label htmlFor="donationFee" className="checkbox">
              <Field
                name="donationFee"
                type="checkbox"
                placeholder="Custom Amount"
              />
              <div className="d-flex">
                <p>Optionally add $$$ to cover processing fee</p>
              </div>
            </label>
          </fieldset>
        </section>

        {/* <section className="comment">
          <fieldset className="comment-check">
            <label className="checkbox">
              <input
                name="writeComment"
                type="checkbox"
                // checked={}
                // onChange={}
              />
              <span>Write us a comment?</span>
            </label>
            <textarea name="comment" id="" rows="3"></textarea>
          </fieldset>
        </section> */}

        <section className="billing">
          <h2>Information</h2>
          <fieldset>
            <label htmlFor="firstName">
              {/* <span>First Name</span> */}
              <Field name="firstName" type="text" placeholder="First Name" />
              <p className="error">
                <ErrorMessage name="firstName" className="error" />
              </p>
            </label>
            <label htmlFor="lastName">
              {/* <span>Last Name</span> */}
              <Field name="lastName" type="text" placeholder="Last Name" />
              <p className="error">
                <ErrorMessage name="lastName" className="error" />
              </p>
            </label>
          </fieldset>
          <fieldset>
            <label htmlFor="email">
              {/* <span>Email Address</span> */}
              <Field name="email" type="email" placeholder="Email Address" />
              <p className="error">
                <ErrorMessage name="email" className="error" />
              </p>
            </label>
            <label htmlFor="zipCode">
              {/* <span>ZIP</span> */}
              <Field name="zipCode" type="text" placeholder="Zip Code" />
              <p className="error">
                <ErrorMessage name="zipCode" className="error" />
              </p>
            </label>
          </fieldset>
        </section>

        <section className="payment">
          <h2>Payment Information</h2>
          <CardElement id="card-element" onChange={handleChange} />
        </section>

        <button disabled={processing || disabled || succeeded} id="submit">
          <span id="button-text">
            {processing ? <div className="spinner" id="spinner"></div> : "Pay"}
          </span>
        </button>
        {/* Show any error that happens when processing the payment */}
        {error && (
          <div className="card-error" role="alert">
            {error}
          </div>
        )}
        {/* Show a success message upon completion */}
        <p className={succeeded ? "result-message" : "result-message hidden"}>
          Payment succeeded, see the result in your
          <a href={`https://dashboard.stripe.com/test/payments`}>
            {" "}
            Stripe dashboard.
          </a>{" "}
          Refresh the page to pay again.
        </p>
      </Form>
    </Formik>
  )
}
