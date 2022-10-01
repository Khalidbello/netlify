//setup-profile.js

//variable to hold image object obj
let img = document.querySelector("#img");

//variable to hold img input field obj 
let imgInput = document.querySelector("#dp")

//variable to hold display name label obj 
let displayNameLabel = document.
  querySelector("#l-dp-name");

//variable to hold displane obj
let displayName = document.querySelector(
  "#dp-name");

//variable to hold about label obj
let aboutLabel = document.querySelector(
  "#l-about");

//variable to hold about obj
let about = document.querySelector(
  "#about");


//function to add preview img
function previewImg(eve) {
  if(imgInput.files.length > 0) {
    let src = URL.createObjectURL(
     imgInput.files[0]);
    img.parentNode.querySelector("#temp").
     style.display = "none";
    img.style.display = "block";
    img.src = src;
    
  };
};//end of previewImg function


//function to display displayNameLabel
function displayDisplayNameLabel(eve) {
  displayNameLabel.style.display = "block";
  setTimeout(()=> {
    displayNameLabel.style.height = "1.8em";
  });
};//end of displayNameLabel function


//function to display aboutLabel
function displayAboutLabel(eve) {
  aboutLabel.style.display = "block";
  setTimeout(()=> {
    aboutLabel.style.height = "1.8em";
  });
};//end of displayAboutLabel function


//function to auto increase the about field
function increaseAbout(eve) {
  let newLine = (about.value.match(/\n/g) ||
    []).length;
  about.style.height = newLine + 2.2 + "em";
}//end of increaseAbout function


//adding event listeners to appropriate 
//objects

imgInput.addEventListener("change", 
  previewImg);

displayName.addEventListener("focus",
  displayDisplayNameLabel);

about.addEventListener("focus",
  displayAboutLabel);

about.addEventListener("keyup", 
  increaseAbout);
