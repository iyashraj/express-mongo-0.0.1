const mongoose = require("mongoose");

const conatctSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add the contact name"],
  },
  email: {
    type: String,
    required: [true, "Please add the contact email"],
  },
  phone: {
    type: String,
    required: [true, "Please add the contact no"],
  },
},
{
    timestamp: true
});

module.exports = mongoose.model("Contact", conatctSchema)