const clientLoginPath = "/clientlogin";
const loginPath = "/login";
const registerPath = "/register";
const verifyPath = "/verify";
const registerService = require("./services/register");
const loginService = require("./services/Login");
const verifyService = require("./services/verify");
const util = require("./utils/utils");
module.exports.handler = async (event) => {
  console.log("Request Event:", event);
  let response;
  switch (true) {
    case event.httpMethod === "GET" && event.path === clientLoginPath:
      response = util.buildResponse(200);
      break;
    case event.httpMethod === "POST" && event.path === registerPath:
      const registerBody = JSON.parse(event.body);
      response = await registerService.register(registerBody);
      break;
    case event.httpMethod === "POST" && event.path === loginPath:
      const loginBody = JSON.parse(event.body);
      response = await loginService.login(loginBody);
      break;
    case event.httpMethod === "POST" && event.path === verifyPath:
      const verifyBody = JSON.parse(event.body);
      response = verifyService.verify(verifyBody);
      break;
    case event.httpMethod === 'OPTIONS':
        response = util.buildCORSResponse(200, 'Success');
        break;
    default:
      response = util.buildResponse(404, "404 Not Found");
  }
  return response;
};

