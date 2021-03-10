const Project = require("../models/Project");

const status = {
  404: { message: "can't find any data", status: 404 },
  200: { message: "ok", status: 200 },
  500: { message: "server error", status: 500 },
};

module.exports = {
  getAll: (req, res) => {
    Project.find((err, data) => {
      if (err) res.json({ ...status[500], data: err });
      if (data) res.json({ ...status[200], data });
    }).sort("-date");
  },
  create: (req, res) => {
    let data = req.body;
    let project = new Project(data);
    project.save((err, data) => {
      if (err) res.json({ ...status[500], data: err });
      if (data) res.json({ ...status[200], data });
    });
  },
  get: (req, res) => {
    let { tag } = req.params;
    Project.findOne({ uTag: tag }, null, null, (err, data) => {
      if (err) res.json({ ...status[500], data: err });
      if (data) res.json({ ...status[200], data });
      else res.json(status[404]);
    });
  },
};
