//log.js

let shadow = "0 0 5px  #111111";
let drkb    = "#606bbb";
let clw = "transparent";

let container = document.querySelector(
    "#container");
let login = document.querySelector(
     "#login");
let createA = document.querySelector(
     "#create-account");
let loginBt = document.querySelector(
    "#disp-login");
let createBt = document.querySelector(
    "#disp-create");

let createBtStyle = createBt.style;
let loginBtStyle = loginBt.style;
let loginStyle = login.style;
let createAStyle = createA.style;

// function to display create account
// invocked by create account button
function showCreateA(eve) {
  if(eve) {
    eve.preventDefault();
    eve.stopPropagation();
  };

  createBtStyle.pointerEvents = "none";
  loginBtStyle.pointerEvents = "none";

  createBtStyle.backgroundColor = drkb;
  createBtStyle.boxShadow = "none";
  createBtStyle.fontWeight = "800";

  loginBtStyle.backgroundColor = clw;
  loginBtStyle.boxShadow = shadow;
  loginBtStyle.fontWeight = "300";

  loginStyle.right = "100%";
  createAStyle.left = "100%";
  createAStyle.display = "block";
 
  //delaying other dom manip for width 0
  //transition to take place
  setTimeout(function() {
    
    createAStyle.left = 0;	  

    setTimeout(function() {
      loginStyle.display = "none";
      createBtStyle.pointerEvents = "auto";
      loginBtStyle.pointerEvents = "auto";
    }, 210);
  }, 0);
};//end of showCreateA function




// function to display login
// invocked by login button
function showLogin(eve) {
  if(eve) {
    eve.preventDefault()
    eve.stopPropagation();
  };
 
  //prevent the display bt frm been click
  createBtStyle.pointerEvents = "none";
  loginBtStyle.pointerEvents = "none";

  createBtStyle.backgroundColor = clw;
  createBtStyle.boxShadow = shadow;
  createBtStyle.fontWeight = "300";

  loginBtStyle.backgroundColor = drkb;
  loginBtStyle.boxShadow = "none";
  loginBtStyle.fontWeight = "800";
 
  createAStyle.left ="100%";
  loginStyle.right  = "100%";
  loginStyle.display = "block"; 
  
  //delaying other dom manip for width 0
  //transition to take place
  setTimeout(function() {

    loginStyle.right =  "0";

    setTimeout(function() {
      createAStyle.display = "none";
      createBtStyle.pointerEvents = "auto";
      loginBtStyle.pointerEvents = "auto";
    }, 210);
  }, 0);
};//end of showLogin function




//function to check for form validation
//before submitting
//invocked by login submit button
function validateLogin(form, eve) {
  eve.stopPropagation;

  let email = form.querySelector(
     "#email");
  let password = form.querySelector(
     "#password");
 
  //setting the p-error field back it empty
  //state before validating
  form.querySelector("#p-error").innerHTML =
   "";
  password.style.borderColor = drkb;

  if(password.value.length < 6) {
     form.querySelector("#p-error").
      innerHTML = "password must be" 
       + " atleast 6 characters";
     password.style.borderColor = "red";
    eve.preventDefault();
  };
};//end of validate login function



//function to validate create account
//invocked by create  account submit button
function validateCreateAccount(form, eve) {
  eve.stopPropagation();

  let password = form.querySelector(
    "#c-password");
  let cPassword = form.querySelector(
    "#c-passwordC");
  let errorBox = form.querySelector(
    "#error-box");
  let createError = form.querySelector(
    "#create-error");

  //checking if password is greater than 6
  if(password.value.length < 6) {
    errorBox.innerHTML = "password must be"
     +"at least six characters";
    password.style.borderColor = "red";
    cPassword.style.borderColor = "red";
    if(createError) {
      createError.innerHTML= "";
    };
    eve.preventDefault();
    return;
  };
  
  //conforming both password field contain 
  //xame value
  if(password.value !== cPassword.value) {
    errorBox.innerHTML = "both password"
    + " field as to contain same value";
    password.style.borderColor = "red";
    cPassword.style.borderColor = "red";
    if(createError) {
      createError.innerHTML= "";
    };
    eve.preventDefault();
    return;
  };

  errorBox.innerHTML = "";
  password.style.borderColor = drkb;
  cPassword.style.borderColor = drkb;
};//end of validate create account function


//note variable used here are declared in 
//the client side script log.handlebars 
//this  would only be executed if
//create account link was enter directly
if(directCreate) showCreateA();

//to be executed if account exists
if(accountExists) {
 document.querySelector("#login-instead").
  addEventListener("click", showLogin);
};

let x = {obj: "sampling"};
