//home.js scripts for home

import {
  hideChatBox, 
  showChatBox
} from  "./chat.js";

chatFuncs.hideChatBox = hideChatBox;
chatFuncs.showChatBox = showChatBox;

//obj yo hold all section of home
let sect = {};

sect.newsfeed = document.querySelector(
  "#newsfeed");

sect.chat = document.querySelector(
  "#chat");

sect.game = document.querySelector(
  "#game");

sect.notification = document.
  querySelector("#notification");

sect.menu = document.querySelector(
  "#menu");

sect.header = document.querySelector(
  "#header");

sect.navBar = document.querySelector(
  "#nav-bar");

sections = sect;
//array to hold all sections for easy 
//navigation purpose
const sectArray = [
   sections.newsfeed,
   sections.chat,
   sections.game,
   sections.notification,
   sections.menu
];

//obj to hold all template to be used
let templates = {};

/******************************************/


// genaral purpose codes 
let sectIndex = 0;//pre state of navigation


//function to handle navigation between 
//sects invocked by nav bar elements
newsfeedFuncs.navigate = function(index, 
 ele) 
{
  let current = sectArray[sectIndex].style;
  let toDisplay = sectArray[index].style;

  if(sectIndex < index) {

    sect.navBar.style.display = "none";
    sect.header.style.display = "none";

    current.zIndex = 1;
    toDisplay.zIndex = 2;
    //toDisplay.right = null;
    toDisplay.left = "100vw";
    toDisplay.display = "block";

    setTimeout( function() {
      toDisplay.left = 0;
    }, 0);

    setTimeout( function() {
      
      sect.navBar.style.display = "flex";
      sect.header.style.display = "flex";

      current.display = "none";
      //updating sectIndex
      sectIndex = index;
    }, 50);
  }
  else if (sectIndex > index) {

    sect.navBar.style.display = "none";
    sect.header.style.display = "none";

    current.zIndex = 1;
    toDisplay.zIndex = 2;
    //toDisplay.left = null;
    toDisplay.right = "100vw";
    toDisplay.display = "block";

    setTimeout( function() {
      toDisplay.right = 0;
    }, 0);

    setTimeout( function() {

      sect.navBar.style.display = "flex";
      sect.header.style.display = "flex";

      current.display = "none";
      //updating sectIndex
      sectIndex = index;
    }, 50);
  };
};//end of navigate function


/*****************************************/


//codes for newsfeed sectionn

//function to handle switching moment imges
newsfeedFuncs.changeImgR = function(ele)
 {
  //variable to hold the div img-holder
  let imgHolder = ele.parentNode;
  //var to hold the children of imgHolder
  let imgHolderChildren = 
     imgHolder.children;
  //var to hold length of children
  let length = imgHolderChildren.length;
  //variable index of current disp img
  let current = parseInt(
    imgHolder.dataset.current);

  let currentImg = imgHolderChildren[
    current].style;
	
  let nextImg = imgHolderChildren[
    current+1].style;
  
  //switching images

  nextImg.left = "100vw";
  nextImg.right = null;
  nextImg.zIndex = "2";
  nextImg.display = "block";
  currentImg.zIndex = "1";

  setTimeout(()=> {
   nextImg.left = "0";
  }, 0);

  setTimeout(()=> {
   currentImg.display = "none";
  }, 50);
  
  //updating current
  imgHolder.dataset.current = current+1;

  if(current >= length-4) {
    ele.style.display = "none";
  };

  imgHolderChildren[length-1].style.
   display = "flex";
};//end of changeImgR function



//function to handle switching moment imges
newsfeedFuncs.changeImgL =  function(ele) 
{
  //variable to hold the div img-holder
  let imgHolder = ele.parentNode;
  //var to hold the children of imgHolder
  let imgHolderChildren =                        imgHolder.children;
  //var to hold length of children
  let length = imgHolderChildren.length;
  //variable index of current disp img
  let current = parseInt(
    imgHolder.dataset.current);

  let currentImg = imgHolderChildren[
    current].style;

  let nextImg = imgHolderChildren[
    current-1].style;

  //switching images
  nextImg.right = "100vw";
  nextImg.left = null;
  nextImg.zIndex = "2";

  nextImg.display = "block";
  currentImg.zIndex = "1";
  

  setTimeout(()=> {
   nextImg.right = "0";
  }, 10);

  setTimeout(()=> {
   currentImg.display = "none";
  }, 50);

  //updating current
  imgHolder.dataset.current = current-1;
  
  if(current <= 1) {
    ele.style.display = "none";
  };
  imgHolderChildren[length-2].style.
   display = "flex";
};//end of changeImgL function




//function to add new monents
function addMoment() {
  if(!templates.moment) {
    fetch("http://localhost:2000/template"
    ).then(response => {
      return response.json();
    }).then(data => {
      console.log(data);
      templates.moment = data.template;
      addMoment();
    }).catch(err => {
      addMoment();
    });
  } 
  else {
    div = document.createElement("div");
    div.setAttribute("class", "moment shdw        bdr1");
    div.innerHTML = templates.moment;
    sections.newsfeed.append(div);
    return;
  };
};

//document.onload = addMoment();

//setTimeout(addMoment, 3000);

//function to auto increase the comets field
newsfeedFuncs.textAreaRespond = 
chatFuncs.textAreaRespond = function(event, 
 ele) 
{
  event.stopPropagation();
  let newLine = (ele.value.match(/\n/g) ||
    []).length;

    ele.style.height = newLine + 2.8 + "em";

}//end of increaseAbout function




//function to handle like animation
newsfeedFuncs.like = function(ele) 
{
  let eleStyle = ele.style;
  
  if(ele.dataset.like === "0") 
  {
    //animating element
    eleStyle.width = "0";
    eleStyle.height = "0";

    setTimeout(()=> {
      eleStyle.stroke = "none";
      eleStyle.fill = "red";
      eleStyle.width = "80%";
      eleStyle.height = "80%";
      ele.dataset.like = "1";
    }, 110);
   } 
   else
   { 
     //animating element
     eleStyle.width = "0";
     eleStyle.height = "0";

     setTimeout(()=> {
       eleStyle.stroke = "#333349";
       eleStyle.fill = "none";
       eleStyle.width = "80%";
       eleStyle.height = "80%";
       ele.dataset.like = "0";
     }, 110);
   };//end of conditional block;

};//end of like function




//function to display comment sect
//invocked by moment comment icon
newsfeedFuncs.comment = function(ele) 
{ 
  let commentSect = ele.parentNode.
      children[1];
  
  //manipulating commentSect

  sect.header.style.display = "none";
  sect.navBar.style.display = "none";

  commentSect.style.display = "block";
  commentSect.style.top = "100vh";

  setTimeout(()=> {
    commentSect.style.top = "0";
  }, 0);
};//end of comment func




//function to undisplay comment sect
//invocked by commentSect back arrow
newsfeedFuncs.hideCommentSect = function(
  ele) 
{
  let commentSect = ele.parentNode.
     parentNode;

  commentSect.style.top = "100vh";

  setTimeout(()=> {
    sect.header.style.display = "flex";
    sect.navBar.style.display = "flex";
    commentSect.style.display = "none";
  }, 100) ;
};//end of hideCommentSect function
