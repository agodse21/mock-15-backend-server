const express = require("express");
const { ticketController } = require("../controllers/ticket.controller");
const { Authentication } = require("../middlewares/Authentication");

const ticketRouter = express.Router();
ticketRouter.post("/createticket", Authentication, ticketController.addData);
ticketRouter.get("/getticket", Authentication, ticketController.Getticket);
module.exports = {
  ticketRouter,
};
