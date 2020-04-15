exports.handler = async (event, context) => {
  console.log("this is a console log")

  const formData = JSON.parse(event.body)

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors),
    }
  }

  return {
    statusCode: 200,
    body: formData,
  }
}
