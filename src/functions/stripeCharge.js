exports.handler = function(event, context, callback) {
  const express = require("express")
  const app = express()
  const { resolve } = require("path")

  const stripe = require("stripe")("sk_test_YZbgPmIbm2d52T0CydfgleE700umJEzH0H")

  app.use(express.static("."))
  app.use(express.json())

  const calculateOrderAmount = donation => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 1400
  }

  app.post("/create-payment-intent", async (req, res) => {
    const { donation } = req.body

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(donation),
      currency: "usd",
    })

    res.send({
      clientSecret: paymentIntent.client_secret,
    })
  })

  app.listen(4242, () => console.log("Node server listening on port 4242!"))
}
