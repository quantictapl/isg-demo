
const AWS = require('aws-sdk');

AWS.config.update({
  region: 'ap-south-1', // Replace with your desired region
});
const util = require('../utils/utils');
const dynamodb = new AWS.DynamoDB.DocumentClient();

const tableName = 'isg-demo'; // Replace with your table name

async function getUser(user) {
  const response = {
    lastVisitedPage: user.lastVisitedPage,
  };

  try {
    const params = {
      TableName: tableName,
      Key: {
        username: user.username, // Replace with the partition key value
      },
      
    };
    const response = await dynamodb.get(params).promise();

    // Check if a user was found in the database
    if (!response.Item) {
      return util.buildResponse(404, { error: 'User not found' });
    }

    // Return the user data including lastVisitedPage
    return util.buildResponse(200, response.Item);
  } catch (err) {
    console.error('Error getting user data', err);
    return util.buildResponse(500, { error: 'Internal Server Error' });
  }
}

module.exports.getUser = getUser;