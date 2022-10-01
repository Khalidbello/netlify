let canvas = document.getElementById(
     "parabola");
let cHeight = canvas.height;
let cWidth = canvas.width;
let ctx = canvas.getContext("2d");

ctx.lineWidth = 6;
ctx.beginPath();
ctx.moveTo(0, cHeight);
ctx.strokeStyle = "#eee";
ctx.fillStyle = "#eee";

ctx.quadraticCurveTo(cWidth*0.5,
     -cHeight*0.9, cWidth, cHeight);
ctx.stroke();
ctx.fill();




//function to display input label
function showLabel(ele) {
  ele.style.border = "none";
  ele.parentNode.style.borderBottom = 
   "thin solid #2791B5";
  ele.parentNode.children[0].style.display =
   "block";
};//end of showLabel function




//function to be invocked when input field
//looses focus
function removeBorder(ele) {
  ele.parentNode.style.borderBottom = 
    "none";
};//end of removeBorder function


//function to display passowrd cancel button
function showCancelButton(ele) {
  let inputField = ele.parentNode.
      children[1];
  console.log(inputField.value);

  if(inputField.value.length > 0) 
  {
    ele.parentNode.children[2].style.display     = "block";
  }
  else 
  {
   ele.parentNode.children[2].style.display     = "none";
  };
}//end of showCancelButton function



//function to clear password input field
function clearField(ele, eve) {
  eve.stopPropagation();
  ele.style.backgroundColor = "#2791B5";
  ele.parentNode.children[1].value = "";

  setTimeout(()=> {
   ele.style.display = "none";
   ele.style.backgroundColor = "#ccc";
  }, 100);
};//end of clear field function



