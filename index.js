const express = require("express");
const app = express();
// here we export all the express functions into a object named app for easy use

const path = require("path");
// here we exported a in-build function of node named path which provides us the  methods for working with file system paths, such as joining path segments, resolving relative paths, and extracting path components.

const methodOverride = require("method-override");
// method-ovverride help us to include methods like patch ,delete,put in our ejs files as it only supports 2 methods get and post

app.use(methodOverride("_method"));
// is used to enable the method override functionality in an Express application

const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));
// used to extract data from the url and converting it to usable form

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// here we set the value of view engine to ejs and difined a path to look for the files it needs as ejs looks for a views directory in your code gor the dynamic files as its default setting

app.use(express.static(path.join(__dirname, "public")));
// as we know css is a static file hence this line in an Express application is used to serve static files from a directory named "public"

main()
  .then(() => console.log("connection is sucessful"))
  .catch(() => console.log("error occured"));
//   here we are callinf the main function so the we can connect our server to the database

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
// this is function and its work is to connect the backend server to the databae whenit is called

const Chat = require("./models/chat.js");
// importing our schema from chat.js

// const user1 = new Chat({
//   from: "raju",
//   to: "raman",
//   msg: "fhrieu rehfre",
//   created_at: new Date(),
// });

// user1.save().then((res) => console.log(res));

app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  //   console.log(chats);
  res.render("home.ejs", { chats });
});
// yaha per hum chat.find() ek asynchronous function hai thats why we have to use await keyword with it but for using await keyword we have make your callback an async function

app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/chats", (req, res) => {
  let nfrom = req.body.from;
  let nto = req.body.to;
  let nmsg = req.body.msg;

  const user = new Chat({
    from: nfrom,
    to: nto,
    msg: nmsg,
    created_at: new Date(),
  });

  user
    .save()
    .then((result) => console.log(result))
    .catch((err) => console.log(err));

  res.redirect("/chats");
});

app.get("/chats/:id/update", async (req, res) => {
  let { id } = req.params;
  let user = await Chat.findById(`${id}`);
  res.render("edit.ejs", { user });
});

app.patch("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let { msg: nmsg } = req.body;
  // let user = await Chat.findById(`${id}`);
  // user.msg = msg;
  Chat.findByIdAndUpdate(id, { msg: nmsg })
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

  res.redirect("/chats");
});

app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let deletedchat = await Chat.findByIdAndDelete(id);
  console.log(deletedchat);
  res.redirect("/chats");
});

app.listen("8080", () => {
  console.log("server is listening on 3000");
});
