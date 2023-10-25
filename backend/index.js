const clientLoginPath = "/clientlogin";
const loginPath = "/login";
const registerPath = "/register";
const verifyPath = "/verify";
const logoutPath="/logout";
const getuserPath="/getuser";
const registerService = require("./services/register");
const loginService = require("./services/Login");
const verifyService = require("./services/verify");
const logoutService=require("./services/Logout");
const getuserService=require("./services/getUser");
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
    case event.httpMethod === "POST" && event.path === logoutPath:
      const logoutBody = JSON.parse(event.body);
      response = logoutService.logout(logoutBody);
      break;
    case event.httpMethod === "POST" && event.path === getuserPath:
      const getUserBody = JSON.parse(event.body);
      response = getuserService.getUser(getUserBody);
      break;
    case event.httpMethod === 'OPTIONS':
      response = util.buildCORSResponse(200, 'Success');
      break;
    default:
      response = util.buildResponse(404, "404 Not Found");
  }

  return response;
};


// const clientLoginPath = "/clientlogin";
// const loginPath = "/login";
// const registerPath = "/register";
// const verifyPath = "/verify";
// const registerService = require("./services/register");
// const loginService = require("./services/Login");
// const verifyService = require("./services/verify");
// const util = require("./utils/utils");
// const {getLastVisitedPageFromDatabase} = require("./utils/getLastVistedPage"); // Replace with your database service

// module.exports.handler = async (event) => {
//   console.log("Request Event:", event);
//   let response;

//   switch (true) {
//     case event.httpMethod === "GET" && event.path === clientLoginPath:
//       response = util.buildResponse(200);
//       break;
//     case event.httpMethod === "POST" && event.path === registerPath:
//       const registerBody = JSON.parse(event.body);
//       response = await registerService.register(registerBody);
//       break;
//     case event.httpMethod === "POST" && event.path === loginPath:
//       const loginBody = JSON.parse(event.body);
//       response = await loginService.login(loginBody);

//       // Check if the user is authenticated successfully
//       if (response.statusCode === 200) {
//         const username = loginService.username; // Replace with your actual user identifier
//         const lastVisitedPage = await getLastVisitedPageFromDatabase(username);

//         if (lastVisitedPage) {
//           // Add a "redirectTo" property to the response to indicate the last visited page
//           response.body.redirectTo = lastVisitedPage;
//         } else {
//           // If no last visited page is found, redirect to a default landing page
//           response.body.redirectTo = '/opening';
//         }
//       }
//       break;
//     case event.httpMethod === "POST" && event.path === verifyPath:
//       const verifyBody = JSON.parse(event.body);
//       response = verifyService.verify(verifyBody);
//       break;
//     case event.httpMethod === 'OPTIONS':
//       response = util.buildCORSResponse(200, 'Success');
//       break;
//     default:
//       response = util.buildResponse(404, "404 Not Found");
//   }

//   return response;
// };

