const AWS = require('aws-sdk');
AWS.config.update({
  region: 'ap-south-1'
})
const util = require('../utils/utils');
const bcrypt = require('bcryptjs');

const dynamodb = new AWS.DynamoDB.DocumentClient();
const userTable = 'isg-demo';

async function register(userInfo) {
  const name = userInfo.name;
  const email = userInfo.email;
  const username = userInfo.email;
  const password = userInfo.password;
  const designation=userInfo.designation;
  const company=userInfo.company;
  const phone=userInfo.phone;
  const gender=userInfo.gender;
  const industry=userInfo.industry;
  if (!username || !name || !email || !password || !designation ||!company || !phone) {
    return util.buildResponse(401, {
      message: 'All fields are required'
    })
  }

  const dynamoUser = await getUser(username);
  if (dynamoUser && dynamoUser.username) {
    return util.buildResponse(401, {
      message: 'username already exists in our database. please choose a different username'
    })
  }
  if (phone.length !== 10) {
    return util.buildResponse(401, {
      message: 'Phone number must be exactly 10 digits'
    })
  }
  const encryptedPW = bcrypt.hashSync(password.trim(), 10);
  const user = {
    name: name,
    email: email,
    username: username,
    password: encryptedPW,
    designation:designation,
    company:company,
    phone:phone,
    gender:gender,
    industry:industry,
    lastVisitedPage: '/opening',
    // currentDivision:"/apploading"
  }

  const saveUserResponse = await saveUser(user);
  if (!saveUserResponse) {
    return util.buildResponse(503, { message: 'Server Error. Please try again later.'});
  }

  return util.buildResponse(200, { username: username });
}

async function getUser(username) {
  const params = {
    TableName: userTable,
    Key: {
      username: username
    }
  }

  return await dynamodb.get(params).promise().then(response => {
    return response.Item;
  }, error => {
    console.error('There is an error getting user: ', error);
  })
}

async function saveUser(user) {
  const params = {
    TableName: userTable,
    Item: user
  }
  return await dynamodb.put(params).promise().then(() => {
    return true;
  }, error => {
    console.error('There is an error saving user: ', error)
  });
}

module.exports.register = register;





// const AWS = require('aws-sdk');
// AWS.config.update({
//   region: 'ap-south-1'
// })
// const util = require('../utils/utils');
// const bcrypt = require('bcryptjs');

// const dynamodb = new AWS.DynamoDB.DocumentClient();
// const userTable = 'isg-demo-1';

// async function register(userInfo) {

  

//   const name = userInfo.name;
//   const email = userInfo.email;
//   const username = userInfo.email;
//   const password = userInfo.password;
//   const designation=userInfo.designation;
//   const company=userInfo.company;
//   const phone=userInfo.phone;
//   const gender=userInfo.gender;
//   const industry=userInfo.industry;
//   const timeStamp=userInfo.timeStamp;
//   if (!username || !name || !email || !password || !designation ||!company || !phone) {
//     return util.buildResponse(401, {
//       message: 'All fields are required'
//     })
//   }

//   const dynamoUser = await getUser(username);
//   if (dynamoUser && dynamoUser.username) {
//     return util.buildResponse(401, {
//       message: 'username already exists in our database. please choose a different username'
//     })
//   }
//   if (phone.length !== 10) {
//     return util.buildResponse(401, {
//       message: 'Phone number must be exactly 10 digits'
//     })
//   }
//   const encryptedPW = bcrypt.hashSync(password.trim(), 10);
//   const user = {
//     name: name,
//     email: email,
//     username: username,
//     timestamp:timeStamp,
//     password: encryptedPW,
//     designation:designation,
//     company:company,
//     phone:phone,
//     gender:gender,
//     industry:industry,
//     lastVisitedPage: '/opening',
//   }

//   const saveUserResponse = await saveUser(user);
//   if (!saveUserResponse) {
//     return util.buildResponse(503, { message: 'Server Error. Please try again later.'});
//   }

//   return util.buildResponse(200, { username: username });
// }

// async function getUser(username) {
//   const params = {
//     TableName: userTable,
//     Key: {
//       username: username,
//     }
//   }

//   return await dynamodb.get(params).promise().then(response => {
//     return response.Item;
//   }, error => {
//     console.error('There is an error getting user: ', error);
//   })
// }

// async function saveUser(user) {
//   const params = {
//     TableName: userTable,
//     Item: user
//   }
//   return await dynamodb.put(params).promise().then(() => {
//     return true;
//   }, error => {
//     console.error('There is an error saving user: ', error)
//   });
// }

// module.exports.register = register;