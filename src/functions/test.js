exports.handler = async (event, context) => {
  const formData = JSON.parse(event.body)
  console.log(formData)

  // if (errors) {
  //   return {
  //     statusCode: 500,
  //     body: JSON.stringify(errors),
  //   }
  // }

  return {
    statusCode: 200,
    body: formData,
  }
}
