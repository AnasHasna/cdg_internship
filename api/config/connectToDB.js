const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to DB : ", conn.connection.host);
  } catch (error) {
    console.log("Error connecting to DB : ", error.message);
    process.exit(1);
  }
};

module.exports = connectToDB;
