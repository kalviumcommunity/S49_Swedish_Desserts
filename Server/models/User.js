// models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;
