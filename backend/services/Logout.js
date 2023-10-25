// const AWS = require('aws-sdk');
// AWS.config.update({
//     region: 'ap-south-1',
// });

// const util = require('../utils/utils');
// const dynamodb = new AWS.DynamoDB.DocumentClient();
// const userTable = 'isg-demo';

// async function logout(username,currentPage) {
//     // Update the user's lastVisitedPage in DynamoDB
//     const params = {
//         TableName: userTable,
//         Key: {
//             username:'aleena@gmail.com',
//         },
//         UpdateExpression: 'SET lastVisitedPage = :page',
//         ExpressionAttributeValues: {
//             ':page': "/smartmerchant",
//         },
//     };

//     dynamodb.update(params, function(err, data) {
//         if (err) console.log(err);
//         else console.log(data);
//      });
// }

// module.exports.logout = logout;

// const AWS = require('aws-sdk');

// AWS.config.update({
//   region: 'ap-south-1', // Replace with your desired region
// });
// const util = require('../utils/utils');
// const dynamodb = new AWS.DynamoDB.DocumentClient();

// const tableName = 'isg-demo'; // Replace with your table name
// async function logout(username,lastVisitedPage){
//   const response = {
//     username: username,
//     lastVisitedPage: lastVisitedPage,
// };
//     const updateParams = {
//         TableName: tableName,
//         Key: {
//           username: username, // Replace with the partition key value
//         },
//         UpdateExpression: 'SET 	lastVisitedPage = :page', // Define the attribute to update
//         ExpressionAttributeValues: {
//           ':page':lastVisitedPage, // Provide the new value for the attribute
//         },
//       };
      
//       dynamodb.update(updateParams, (err, data) => {
//         if (err) {
//           console.error('Error updating item:', err);
//         } else {
//           console.log('Item updated successfully:', data);
          
//         }
//       });
//       return util.buildResponse(200, response);
// }

// module.exports.logout=logout;

const AWS = require('aws-sdk');

AWS.config.update({
  region: 'ap-south-1', // Replace with your desired region
});
const util = require('../utils/utils');
const dynamodb = new AWS.DynamoDB.DocumentClient();

const tableName = 'isg-demo'; // Replace with your table name

async function logout(user) {
  const response = {
    username: user.username,
    lastVisitedPage: user.lastVisitedPage,
  };

  try {
    const updateParams = {
      TableName: tableName,
      Key: {
        username: user.username, // Replace with the partition key value
      },
      UpdateExpression: 'SET lastVisitedPage = :page', // Define the attribute to update
      ExpressionAttributeValues: {
        ':page': user.lastVisitedPage, // Provide the new value for the attribute
      },
    };

    const data = await dynamodb.update(updateParams).promise();

    console.log(user.username, user.lastVisitedPage);
    console.log('Item updated successfully:', data);

    // Return a success response with a 200 status code
    return util.buildResponse(200, response);
  } catch (err) {
    console.error('Error updating item:', err);

    // Return an error response with a 500 status code
    return util.buildResponse(500, { error: 'Internal Server Error' });
  }
}

module.exports.logout = logout;