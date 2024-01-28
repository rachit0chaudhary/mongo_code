const mongoose = require("mongoose");

// we dont do all our work in our main index file as it already have to much to do and its makes the code bulky and messy hence we create this modules folder and here we create different schemas seperatly in their respective files

const chatSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  msg: {
    type: String,
    maxLength: 100,
  },
  created_at: {
    type: Date,
    required: true,
  },
});

const Chat = mongoose.model("chat", chatSchema);

module.exports = Chat;
// and here we have exported our schema
