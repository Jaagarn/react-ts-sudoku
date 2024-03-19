const express = require("express");
const innerapp = express();

const solverRouter = require("./controllers/solver");

const setUpExpressinnerapp = () => {
  innerapp.use(express.json());
  innerapp.use(express.static("build"));

  innerapp.use("/api/solver", solverRouter);

};

setUpExpressinnerapp();
module.exports = innerapp;