export async function handler(event, context) {
  const fetch = require("node-fetch")

  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(json => console.log(json))

  return {
    statusCode: 200,
    body: "this is the body",
  }
}
