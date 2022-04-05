const mongooes = require("mongoose");
const validator = require("validator");

const userSchema = new mongooes.Schema({
  name: {
    type: String,
    required: [true, "pleaser enter you name"],
    maxlength: [30, "Name cannot exceed 30 characters"],
    mixlenght: [4, "name should have more then 4 character"],
  },
  email: {
    type: String,
    required: [true, "Please enter Your Email"],
    unique: true,
    validator: [validator.isEmail, "Please Enter  a vaild Email"],
  },
  password: {
    type: String,
    required: [true, "Enter you Password"],
    mixlenght: [6, "name should have more then 6 character"],
    select: false,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    default: "user",
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

module.exports = userSchema;
