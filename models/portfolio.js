const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String },
  site: { type: String },
  repo: { type: String },
});

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

module.exports = Portfolio;
