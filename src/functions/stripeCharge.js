require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

exports.handler = async (event, context, callback) => {
  const stripe = require("stripe")("process.env.GATSBY_STRIPE_SECRET_KEY")

  const calculateOrderAmount = async donationAmount => {
    return donationAmount
  }

  const data = JSON.parse(event.body)
  const { donationAmount, name } = data
  const paymentIntent = await stripe.paymentIntents.create({
    amount: await calculateOrderAmount(donationAmount),
    currency: "usd",
    description: `Dear ${name},\n \n This is a receipt for your gracious donation to Artist Rescue Trust. Artist Rescue Trust is a fiscally sponsored program by The Digital Harbor Foundation - a 501c3 non-profit, EIN 45-2536579, that builds tools to help communities respond and be more resilient to crises. This donation is tax deductible in the USA. \n \n Thank you,  \n Artist Rescue Trust`,
  })

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
    },
    body: JSON.stringify({
      clientSecret: paymentIntent.client_secret,
    }),
  }
}
