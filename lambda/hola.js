module.exports.handler = (event, context) => {

  console.log('Im doing an authorized action at the backend');

  return {
    statusCode: 200,
    body: JSON.stringify({
      msg: `I did  an action with a lambda. I'm among the  cool kids now 😎`
    });
  }
}
