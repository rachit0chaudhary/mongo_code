const mongoose = require("mongoose");

main()
  .then(() => console.log("connection is sucessful"))
  .catch(() => console.log("error occured"));
//   here we are callinf the main function so the we can connect our server to the database

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
// this is function and its work is to connect the backend server to the databae whenit is called

const Chat = require("./models/chat.js");

let chatDb = [
  {
    from: "raj",
    to: "vivik",
    msg: "chal nh yr",
    created_at: new Date(),
  },
  {
    from: "roy",
    to: "client",
    msg: "ap iss time duniya ki sabse safe jagaha pe khade hai",
    created_at: new Date(),
  },
  {
    from: "anshuman",
    to: "award",
    msg: "anshuman nhi its award anshuman",
    created_at: new Date(),
  },
  {
    from: "baba",
    to: "shayar",
    msg: "shayar hai apun",
    created_at: new Date(),
  },
  {
    from: "chota",
    to: "don",
    msg: "chota don hu mai",
    created_at: new Date(),
  },
  {
    from: "rudra",
    to: "rachit",
    msg: "rachit yr ek kam kerde yr",
    created_at: new Date(),
  },
  {
    from: "tushar",
    to: "coach",
    msg: "kuch nhi hoga tujse bata reha hu mai",
    created_at: new Date(),
  },
  {
    from: "nakhre",
    to: "rachit",
    msg: "mai bolta he esse hu yr",
    created_at: new Date(),
  },
  {
    from: "saka",
    to: "piyush",
    msg: "yr saka bbhai infal chale ky",
    created_at: new Date(),
  },
];

Chat.insertMany(chatDb);
