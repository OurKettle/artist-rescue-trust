exports.handler = async (event, context, callback) => {
  const stripe = require("stripe")("sk_test_YZbgPmIbm2d52T0CydfgleE700umJEzH0H")

  const calculateOrderAmount = async donationAmount => {
    // let total = 0

    // for (let index = 0; index < donationAmount.length; index++) {
    //   const sku = await stripe.skus.retrieve(donationAmount[index].sku)
    //   total += sku.price * donationAmount[index].quantity
    // }
    return 12
  }

  const data = JSON.parse(event.body)
  const donationAmount = data.donationAmount
  const paymentIntent = await stripe.paymentIntents.create({
    amount: await calculateOrderAmount(donationAmount),
    currency: "usd",
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
