const mongoose = require("mongoose");

const connectDB =  () => {
   mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
    })
   .then((data)=>{ console.log(
      `MongoDB Connected: ${data.connection.host}`.cyan.underline.bold
    );
  });
};

module.exports = connectDB;
