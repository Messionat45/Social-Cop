const mongoose = require("mongoose");
const complaint = require;

const dbConnect = async () => {
  try {
    const dbUrl = process.env.dbUrl;
    // console.log(dbUrl);
    await mongoose.connect(dbUrl);
    console.log("connected too db");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = dbConnect;
