const { User } = require('../models');

const getAllUsers = async (_req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({
      message: 'Something went wrong!'
    });
  }
}

module.exports = {
  getAllUsers,
}