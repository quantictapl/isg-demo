const AWS = require('aws-sdk');
AWS.config.update({
    region: 'ap-south-1',
})
const bcrypt = require('bcryptjs');
const util = require('../utils/utils');
const dynamodb = new AWS.DynamoDB.DocumentClient();
const userTable = 'isg-demo-1';
const auth = require('../utils/auth');
async function getLastVisitedPageFromDatabase(lastVisitedPage) {
    const params = {
        TableName: userTable,
        Key: {
            lastVisitedPage: lastVisitedPage,
        },
    };

    try {
        const result = await dynamodb.get(params).promise();
        return result.Item && result.Item? result.Item : null;
    } catch (error) {
        console.error('Error getting last visited page from DynamoDB:', error);
        return null;
    }
}
module.exports.getLastVisitedPageFromDatabase = getLastVisitedPageFromDatabase;