const { getAllUsers } = require('../controllers/user.controller');

const express = require('express');

const userRouter = express.Router();

userRouter.get('/', getAllUsers);

module.exports = userRouter;
