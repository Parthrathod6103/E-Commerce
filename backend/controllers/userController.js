const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const user = require("../models/userModel");

//resgister a user
exports.registerUesr = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "this is simple id ",
      url: "profilepic",
    },
  });
  res.status(201).json({
    success: true,
    user,
  });
});
