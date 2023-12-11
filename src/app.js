const express = require('express')
const controllerCreator = require('./controller/users.controller');
const serviceCreator = require('./service/users.service');
const inMemoryUserModel = require('./model/inMemory.users.model');
const mysqlUserModel = require('./model/mysql.users.model');

const environ = process.env.ENVIRON;

const app = express();

let userModel;

if (environ === 'docker') {
  userModel = mysqlUserModel;
  console.log('Running using Mysql Model');
} 
else {
  userModel = inMemoryUserModel;
  console.log('Running using inMemory Model');
}

const service = serviceCreator.createUserService(userModel)

const controller = controllerCreator
  .createController(service);

app.get('/', controller.getAll);
app.post('/', controller.create);

module.exports = app;