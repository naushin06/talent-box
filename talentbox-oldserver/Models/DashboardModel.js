const mongoose = require("mongoose");

const dashboardSchema = new mongoose.Schema({
  first_name: String
});

module.exports = mongoose.model("Dashboard", dashboardSchema);
  