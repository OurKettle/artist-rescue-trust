export async function handler(event, context) {
  const fetch = require("node-fetch")

  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(resp => resp.json())
    .then(function(data) {
      const data = data.results
    })

  return {
    statusCode: 200,
    body: data.results.title,
  }
}
