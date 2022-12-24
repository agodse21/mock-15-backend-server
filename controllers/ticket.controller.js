const { ticketModel } = require("../model/ticket.model");
const { UserModel } = require("../model/user.model");

const addData = async (req, res) => {
  const { category, title, message, user_id } = req.body;
  const user = await UserModel.findOne({ user_id: user_id });
  const new_ticket = new ticketModel({
    category: category,
    title: title,
    message: message,
    user_id: user.name,
  });
  await new_ticket.save();
  res.send({ msg: "data added succesfully!" });
};
const Getticket = async (req, res) => {
  let { category } = req.query;
  if (category) {
    const data = await ticketModel.find({ category: category });
    res.send(data);
  } else {
    const data = await ticketModel.find();

    res.send(data);
  }
};
const ticketController = {
  Getticket,
  addData,
};
module.exports = {
  ticketController,
};
