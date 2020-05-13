import React, { useState } from "react"
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js"
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"

export default function CheckoutForm() {
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async event => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return
    }

    const result = await stripe.confirmCardPayment("{CLIENT_SECRET}", {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "Jenny Rosen",
        },
      },
    })

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message)
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === "succeeded") {
        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
      }
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
        customAmount: Yup.string().required("Please enter a custom amount"),
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
          {/* <fieldset>
            <label className="checkbox">
              <input
                name="newsletter"
                type="checkbox"
                // checked={}
                // onChange={handleOptionChange}
              />
              <div className="d-flex">
                <p>Sign up to receive our newsletter.</p>
              </div>
            </label>
          </fieldset> */}
        </section>

        <section className="payment">
          <h2>Payment Information</h2>
          <CardElement />
        </section>

        <button type="submit" disabled={!stripe}>
          Submit
        </button>
      </Form>
    </Formik>
  )
}
