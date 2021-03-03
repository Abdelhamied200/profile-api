console.clear();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cli = require("@cudy/cli");
const router = require("./routes");
require("dotenv").config();

// app uses
const app = express();
app.use(cors());
app.use(express.json());

// router
app.use("/api", router);

// mongoose
let DB = process.env.DB_HOST;
mongoose.connect(DB, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let conn = mongoose.connection;
conn.once("open", () => {
  cli.succ("mongoDB connected!");
});

// listen
const port = process.env.PORT || 5000;
app.listen(port, () => cli.succ(`Server running on port ${port}`));
