const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect(process.env.CONNECTION_STRING);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

module.exports = db;
