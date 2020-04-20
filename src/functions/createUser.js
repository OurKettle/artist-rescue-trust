exports.handler = async (event, context) => {
  const user = JSON.parse(event.body)
  console.log(user)

  // if (errors) {
  //   return {
  //     statusCode: 500,
  //     body: JSON.stringify(errors),
  //   }
  // }

  return {
    statusCode: 200,
    body: user,
  }
}