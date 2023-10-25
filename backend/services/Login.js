const AWS = require('aws-sdk');
AWS.config.update({
    region: 'ap-south-1',
})
const bcrypt = require('bcryptjs');
const util = require('../utils/utils');
const dynamodb = new AWS.DynamoDB.DocumentClient();
const userTable = 'isg-demo';
const auth = require('../utils/auth');
const {getLastVisitedPageFromDatabase}  = require("../utils/getLastVistedPage"); // Replace with your database functions
// const  updateLastVisitedPageInDatabase  = require("../utils/updateLastVisitedPage"); // Replace with your database functions

async function login(user) {
    const username = user.username;
    const password = user.password;
    const lastVisitedPage=user.lastVisitedPage;
    if (!user || !username || !password) {
        return util.buildResponse(401, {
            message: "Username and password are required",
        });
    }
    const dynamoUser = await getUser(username);
    if (!dynamoUser || !dynamoUser.username) {
        return util.buildResponse(403, {
            message: "User does not exist",
        });
    }
    if (!bcrypt.compareSync(password, dynamoUser.password)) {
        return util.buildResponse(403, {
            message: "Password is incorrect",
        });
    }

    const userInfo = {
        username: dynamoUser.email,
        name: dynamoUser.name,
    };
    const token = auth.generateToken(userInfo);
    const response = {
        user: userInfo,
        token: token,
    };
    // if(lastVisitedPage!==null || lastVisitedPage!==undefined){
    //     logout(username,lastVisitedPage)
    // }
    // Retrieve the user's last visited page from the database
    console.log(lastVisitedPage)

    if (lastVisitedPage) {
        // Add a "redirectTo" property to the response to indicate the last visited page
        response.redirectTo = lastVisitedPage;
    } else {
        // If no last visited page is found, set the redirectTo property to a default landing page
        response.redirectTo = '/opening';
    }

    return util.buildResponse(200, response);
}

async function getUser(username) {
    const params = {
        TableName: userTable,
        Key: {
            username: username,
        },
    };
    return await dynamodb.get(params).promise().then((response) => {
        return response.Item;
    }, (error) => {
        console.error('This is an error getting ', error);
    });
}
async function logout(username,lastVisitedPage){
      const updateParams = {
          TableName: userTable,
          Key: {
            username: username, // Replace with the partition key value
          },
          UpdateExpression: 'SET 	lastVisitedPage = :page', // Define the attribute to update
          ExpressionAttributeValues: {
            ':page':lastVisitedPage, // Provide the new value for the attribute
          },
        };
        
        dynamodb.update(updateParams, (err, data) => {
          if (err) {
            console.error('Error updating item:', err);
          } else {
            console.log('Item updated successfully:', data);
            
          }
        });
  }

module.exports.login = login;

// const AWS = require('aws-sdk');
// AWS.config.update({
//     region: 'ap-south-1',
// })
// const bcrypt = require('bcryptjs');
// const util = require('../utils/utils');
// const dynamodb = new AWS.DynamoDB.DocumentClient();
// const userTable = 'isg-demo-1';
// const auth = require('../utils/auth');
// const {getLastVisitedPageFromDatabase}  = require("../utils/getLastVistedPage"); // Replace with your database functions
// // const  updateLastVisitedPageInDatabase  = require("../utils/updateLastVisitedPage"); // Replace with your database functions

// async function login(user) {
//     const username = user.username;
//     const password = user.password;
//     if (!user || !username || !password) {
//         return util.buildResponse(401, {
//             message: "Username and password are required",
//         });
//     }
//     const dynamoUser = await getUser(username);
//     if (!dynamoUser || !dynamoUser.username) {
//         return util.buildResponse(403, {
//             message: "User does not exist",
//         });
//     }
//     if (!bcrypt.compareSync(password, dynamoUser.password)) {
//         return util.buildResponse(403, {
//             message: "Password is incorrect",
//         });
//     }

//     const userInfo = {
//         username: dynamoUser.email,
//         name: dynamoUser.name,
//     };
//     const token = auth.generateToken(userInfo);
//     const response = {
//         user: userInfo,
//         token: token,
//     };

//     // Retrieve the user's last visited page from the database
//     const lastVisitedPage = dynamoUser.lastVisitedPage;
//     console.log(lastVisitedPage)

//     if (lastVisitedPage) {
//         // Add a "redirectTo" property to the response to indicate the last visited page
//         response.redirectTo = lastVisitedPage;
//     } else {
//         // If no last visited page is found, set the redirectTo property to a default landing page
//         response.redirectTo = '/panorama';
//     }

//     return util.buildResponse(200, response);
// }

// async function getUser(username) {
//     const params = {
//         TableName: userTable,
//         Key: {
//             username: username,
//             // timestamp:new Date().toISOString()
//         },
//     };
//     return await dynamodb.get(params).promise().then((response) => {
//         return response.Item;
//     }, (error) => {
//         console.error('This is an error getting ', error);
//     });
// }

// module.exports.login = login;