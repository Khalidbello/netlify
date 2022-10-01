//handlers main.js


//handling home
exports.home = function(req, res) {
  if(req.cookies.id) {
    console.log(req.session.id);
    return res.render("home", {
      layout: null
    });
  };
  res.redirect(302, "/login");
};//end of home handler



exports.sendTemp = function(req, res) {
  fs.readFile("/data/data/com.termux/files/home/pawch/views/templates/newsfeed/momentTemp", (err, temp) => {
    if(err) return res.json({error: err});
    res.json({template: temp.toString()});
  });
};


//handling log request
exports.login = function(req, res) {
  let create = false;

  //display create account on condition
  let flash = res.locals.flash;
  if(flash.accountExists || flash.dbcError 
     || flash.dbiError) {
    create = true;
  };

  res.render("login", {
     layout:null,
  });
};



//handling login  request
exports.authenticate = function(req, res, users) { 
  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  users.findOne(user, (err, data)=> {
    if(err) {
      req.session.flash.dbError = true;
      return res.redirect(303,"/log");
    };

    if(!data) {
     req.session.flash.accountError = true;
     return res.redirect(303,"/log");
    };

    res.cookie("id", data._id)
    return res.redirect(302, "/");
  });
	 
}; //end of login handler



//account creating account handler
exports.createAccount = function(req, res, 
 users) {

  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  users.findOne(user, (err, data)=> {
    if(err) {
      req.session.flash.dbcError = true;
      return res.redirect(303,"/log");
    };

    if(data) {
     req.session.flash.accountExists = true;
     return res.redirect(303,"/log");
    };

    users.insert(user, (err, data)=> {
      if(err) {
        req.session.flash.dbiError = true;
	return res.redirect(303,"/log");
      };
      res.cookie("id", data._id);
      return res.redirect(302, 
	"/setup-profile");
    });
  });
}; //end of create account handler



//handler to handle showing profile setUp
exports.showSetupProfile = function(req, 
 res) {
  res.render("setup-profile", {
   layout: null
  });
};//end of showSetupprofile



//handler to handle initial profile setup
exports.setupProfile = function(req, res,
 formidable) {
  let form = new formidable.IncomingForm().
    parse(req, (err, fields, files)=> {
     if(err) return console.log(err);
     console.log(fields);
     console.log(files);
     res.redirect(302, "/");
  });
};//end of setup function


