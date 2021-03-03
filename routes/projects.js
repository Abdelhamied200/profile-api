const express = require("express");
const project = require("../controllers/project");
const router = express.Router();

router.get("/all", project.getAll);
router.post("/new", project.create);
router.get("/:tag", project.get);

module.exports = router;
