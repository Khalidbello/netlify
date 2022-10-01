//pawch.js

const express = require("express");

const socket = require("socket.io");

const http = require("http");

const bodyParser = require("body-parser")

const cookie = require("cookie-parser");

const session = require("express-session");

const formidable = require("formidable");

const dataStore = require("nedb");                                                      const fs = require("fs");

const handlebars = require(                       "express-handlebars").create({
        extname: ".hbs"                     });

const port = process.env.PORT || 2000

const users = new dataStore({
    filename: "../../data/users",
    timestampData: true,                        autoload: true,                             corruptAlertThreshold: 1,
});

const app = express(http);
const server = http.createServer(app);

//setting templing engine to handlebars
app.engine("handlebars", 
            handlebars.engine);
app.set("view engine", "handlebars");

//**************************************
// locking in middle wears

app.use(express.static(__dirname
 +"/public"));

app.use(cookie("helllidhdh"));

app.use(session({
  secret: 'ssshhhhh',
  resave: true,
  saveUninitialized: true,
}));

//middle to transfer flash messages
app.use((req, res, next)=> {
  if(req.session.flash) {
    res.locals.flash = req.session.flash;
    delete req.session.flash;
    req.session.flash = {};
    return next();
  };
  req.session.flash = {};
  res.locals.flash = {};
  next();
});

app.use(bodyParser.urlencoded({
  extended: true
}));

//linking in router
const route = require(
  "./modules/routes/main.js");
route.router(app, formidable, users);


const io = socket(server);
const messageIo = io.of("/message");

io.on("connection", (socket)=> {
  console.log("just io");
});

messageIo.on("connection", (socket)=> {
  console.log("io2");
});

server.listen(port, (err)=> {
  if(err) return err;
  console.log(`running ${port}`);
});

