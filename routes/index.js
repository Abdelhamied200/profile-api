const express = require("express");
const router = express.Router();

const projectRoutes = require("./projects");

router.get("/", (req, res) => {
  res.send("welcome to my api");
});

router.use("/project", projectRoutes);

module.exports = router;
