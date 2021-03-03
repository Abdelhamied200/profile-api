const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Project = new Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  uTag: {
    type: String,
    unique: true,
    required: true,
  },
  tools: [
    {
      type: String,
      required: true,
    },
  ],
  pic: {
    type: String,
    required: true,
  },
  git: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  old: {
    git: {
      type: String,
    },
    date: {
      type: Date,
    },
  },
});

module.exports = mongoose.model("projects", Project);
