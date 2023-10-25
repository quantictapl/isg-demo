const AWS = require('aws-sdk');
AWS.config.update({
    region: 'ap-south-1',
})
const bcrypt = require('bcryptjs');
const util = require('./utils');
const dynamodb = new AWS.DynamoDB.DocumentClient();
const userTable = 'isg-demo-1';
const auth = require('./auth');
async function updateLastVisitedPageInDatabase(username, lastVisitedPage) {
    const params = {
        TableName: userTable,
        Key: {
            username: username,
        },
        UpdateExpression: 'SET lastVisitedPage = :page',
        ExpressionAttributeValues: {
            ':page': lastVisitedPage,
        },
    };

    try {
        await dynamodb.update(params).promise();
    } catch (error) {
        console.error('Error updating last visited page in DynamoDB:', error);
    }
}
module.exports.updateLastVisitedPageInDatabase = updateLastVisitedPageInDatabase;