const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  role: { type: String, default: "user" },
});
module.exports = mongoose.model("User ", userSchema);

