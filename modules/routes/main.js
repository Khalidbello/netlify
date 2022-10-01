//main routing section
const handler = require(
   "./../handlers/main.js");


exports.router = function(app, formidable,
 users) {

  app.get("/", (req, res)=> {
    handler.home(req, res);
  });

  app.get("/login", (req, res)=> {
    handler.login(req, res);
  });

  app.get("/setup-profile", (req, res)=> {
    handler.showSetupProfile(req, res);
  });



  app.post("/login", (req, res)=> { 
    handler.authenticate(req, res, users);
  });

  app.post("/create-account", (req, res)=> {
    handler.createAccount(req, res, users);
  });

  app.post("/setup-profile", (req, res)=> {
    handler.setupProfile(req, res, 
     formidable);
  });

  app.get("/template", (req, res)=> {
    handler.sendTemp(req, res)
  });

};

