const Dashboard = require("../models/DashboardModel");
const mongoose = require("mongoose");

const dashboardController = {};

dashboardController.getAllDetails = async (req, res) => {
  try {
    const getData = await Dashboard.findById('64135929becf4dd1e491d0bc');
    console.log("GETDATA ::::", getData);
    res.status(200).json({ data: getData });
  } catch (err) {
    res
      .status(500)
      .json({ message: `error occured in catch block !!!! ,${err}` });
  }
};

dashboardController.getById = (req, res) => {
  Dashboard.findById(req.params.id, (err, dashboard) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(dashboard);
    }
  });
};

dashboardController.create = (req, res) => {
  const newDashboard = new Dashboard({
    title: req.body.title,
    content: req.body.content,
  });

  newDashboard.save((err, dashboard) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(201).send(dashboard);
    }
  });
};

dashboardController.updateById = (req, res) => {
  Dashboard.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      content: req.body.content,
    },
    { new: true },
    (err, dashboard) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.status(200).send(dashboard);
      }
    }
  );
};

dashboardController.deleteById = (req, res) => {
  Dashboard.findByIdAndDelete(req.params.id, (err, dashboard) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(204).send();
    }
  });
};

module.exports = dashboardController;
