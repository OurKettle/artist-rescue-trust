import React, { useState, useEffect } from "react"
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js"
// import { Formik, Field, Form, ErrorMessage } from "formik"
// import * as Yup from "yup"

export default function StripeForm() {
  const stripe = useStripe()
  const elements = useElements()

  const [succeeded, setSucceeded] = useState(false)
  const [error, setError] = useState(null)
  const [processing, setProcessing] = useState("")
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState("")
  const [donationAmount, setDonationAmount] = useState({
    activeIndex: -1,
    value: "",
    checked: false,
  })
  const [firstName, setFirstName] = useState("")
  const donationAmounts = [
    {
      label: "50",
      value: 5000,
      text: "Support those in need!",
    },
    {
      label: "100",
      value: 10000,
      text: "Move the needle for an artist",
    },
    {
      label: "500",
      value: 50000,
      text: "Support 1 month for 1 artist",
    },
    {
      label: "1500",
      value: 150000,
      text: "Support an artist for the full 3 months of support",
    },
    {
      label: "custom",
      value: "custom",
      text: "Enter custom amount",
    },
  ]

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    window
      .fetch("/.netlify/functions/stripeCharge", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          donationAmount: parseInt(donationAmount.value),
          name: firstName,
        }),
      })
      .then(response => response.json())
      .then(data => {
        setClientSecret(data.clientSecret)
      })
  }, [donationAmount, firstName])

  const handleChange = async ev => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(ev.empty)
    setError(ev.error ? ev.error.message : "")
  }

  const handleSubmit = async ev => {
    ev.preventDefault()
    setProcessing(true)

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: ev.target.firstName.value + " " + ev.target.lastName.value,
          email: ev.target.email.value,
        },
      },
    })

    if (payload.error) {
      setError(`Payment failed. ${payload.error.message}`)
      setProcessing(false)
    } else {
      setError(null)
      setProcessing(false)
      setSucceeded(true)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={succeeded ? "hidden" : null}>
        <section className="amount">
          <h2>Choose Amount</h2>
          <fieldset className="amount-check">
            {donationAmounts.map((d, index) => {
              const handleOptionChange = ev => {
                setDonationAmount({
                  activeIndex: index,
                  value: ev.target.value,
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
                        <input
                          name={d.label}
                          type="text"
                          placeholder="Custom Amount"
                          onChange={handleOptionChange}
                        />
                        <p className="error" style={{ margin: "0" }}>
                          {/* <ErrorMessage name="customAmount" /> */}
                        </p>
                      </>
                    )
                }
              }

              return (
                <label
                  key={index}
                  className={
                    index === donationAmount.activeIndex
                      ? "checkbox active"
                      : "checkbox"
                  }
                >
                  <input
                    name={d.label}
                    value={d.value}
                    type="radio"
                    checked={donationAmount.value === d.value}
                    onChange={handleOptionChange}
                  />
                  <div className="d-flex">{renderSwitch(d.value)}</div>
                </label>
              )
            })}
          </fieldset>
          <fieldset>
            <label htmlFor="donationFee" className="checkbox">
              <input
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

        <section className="billing">
          <h2>Information</h2>
          <fieldset>
            <label htmlFor="firstName">
              {/* <span>First Name</span> */}
              <input
                name="firstName"
                type="text"
                placeholder="First Name"
                onChange={e => setFirstName(e.target.value)}
              />
              <p className="error">
                {/* <ErrorMessage name="firstName" className="error" /> */}
              </p>
            </label>
            <label htmlFor="lastName">
              {/* <span>Last Name</span> */}
              <input name="lastName" type="text" placeholder="Last Name" />
              <p className="error">
                {/* <ErrorMessage name="lastName" className="error" /> */}
              </p>
            </label>
          </fieldset>
          <fieldset>
            <label htmlFor="email">
              {/* <span>Email Address</span> */}
              <input name="email" type="email" placeholder="Email Address" />
              <p className="error">
                {/* <ErrorMessage name="email" className="error" /> */}
              </p>
            </label>
          </fieldset>
        </section>

        <section className="payment">
          <h2>Payment Information</h2>
          <CardElement id="card-element" onChange={handleChange} />
        </section>

        <button
          disabled={processing || disabled || error || succeeded}
          id="submit"
        >
          <span id="button-text">
            {processing ? (
              <div class="sk-fading-circle">
                <div class="sk-circle1 sk-circle"></div>
                <div class="sk-circle2 sk-circle"></div>
                <div class="sk-circle3 sk-circle"></div>
                <div class="sk-circle4 sk-circle"></div>
                <div class="sk-circle5 sk-circle"></div>
                <div class="sk-circle6 sk-circle"></div>
                <div class="sk-circle7 sk-circle"></div>
                <div class="sk-circle8 sk-circle"></div>
                <div class="sk-circle9 sk-circle"></div>
                <div class="sk-circle10 sk-circle"></div>
                <div class="sk-circle11 sk-circle"></div>
                <div class="sk-circle12 sk-circle"></div>
              </div>
            ) : (
              <h2>Donate</h2>
            )}
          </span>
        </button>
        {/* Show any error that happens when processing the payment */}
        {error && (
          <div className="card-error" role="alert">
            {error}
          </div>
        )}
      </form>
      {/* Show a success message upon completion */}
      <p className={succeeded ? "result-message" : "result-message hidden"}>
        <span role="image" aria-label="thumbs up">
          👍
        </span>{" "}
        Your donation was successful. Thank you!{" "}
        <span role="image" aria-label="smiley face">
          😀
        </span>
      </p>
    </>
  )
}
