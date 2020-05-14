import React, { useState, useEffect } from "react"
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js"
// import { Formik, Field, Form, ErrorMessage } from "formik"
// import * as Yup from "yup"

export default function CheckoutForm() {
  const stripe = useStripe()
  const elements = useElements()
  const [succeeded, setSucceeded] = useState(false)
  const [error, setError] = useState(null)
  const [processing, setProcessing] = useState("")
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState("")

  // const donationAmounts = [
  //   {
  //     label: "50",
  //     value: "50",
  //     text: "Support those in need!",
  //   },
  //   {
  //     label: "100",
  //     value: "100",
  //     text: "Move the needle for an artist",
  //   },
  //   {
  //     label: "500",
  //     value: "500",
  //     text: "Support 1 month for 1 artist",
  //   },
  //   {
  //     label: "1500",
  //     value: "1500",
  //     text: "Support an artist for the full 3 months of support",
  //   },
  //   {
  //     label: "custom",
  //     value: "custom",
  //     text: "Enter custom amount",
  //   },
  // ]

  // const [state, setState] = useState({
  //   activeIndex: -1,
  //   selectedOption: "",
  //   checked: false,
  // })

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    window
      .fetch("/.netlify/functions/stripeCharge", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(response => response.json())
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
        // billing_details: {
        //   firstName: ev.target.firstName.value,
        //   lastName: ev.target.lastName.value,
        //   email: ev.target.email.value,
        //   zipCode: ev.target.zipCode.value,
        // },
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

  return (
    <form action={handleSubmit}>
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
    </form>
  )
}
