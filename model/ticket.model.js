const mongoose = require("mongoose");
const ticketSchema = new mongoose.Schema(
  {
    category: { type: String, require: true },
    title: { type: String, require: true },
    message: { type: Object, require: true },
    user_id: { type: Object, require: true },
  },
  {
    timestamps: true,
  }
);

const ticketModel = mongoose.model("ticket", ticketSchema);

module.exports = {
  ticketModel,
};
