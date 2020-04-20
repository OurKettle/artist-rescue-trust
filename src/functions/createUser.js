const faunadb = require("faunadb")

const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.fnADp5Xx5gACEyuIYWZera0bRNxvWshHKhXyyjx7,
})

exports.handler = (event, context, callback) => {
  const data = JSON.parse(event.body)
  console.log("Function `createUser` invoked", data)
  const user = {
    data: data,
  }

  /* construct the fauna query */
  return client
    .query(q.Create(q.Ref("classes/user"), user))
    .then(response => {
      console.log("success", response)
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(response),
      })
    })
    .catch(error => {
      console.log("error", error)
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify(error),
      })
    })
}
