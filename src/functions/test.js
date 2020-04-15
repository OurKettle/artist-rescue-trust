exports.handler = async (event, context) => {
  // let formData = JSON.parse(event.body)
  // console.log(formData)

  // if (errors) {
  //   return {
  //     statusCode: 500,
  //     body: JSON.stringify(errors),
  //   }
  // }

  // return {
  //   statusCode: 200,
  //   body: formData,
  // }

  console.log("this is a console log")
  let log = "this is the body"
  return {
    statusCode: 200,
    body: log,
  }
}
