//code for chatting section


//function to display chat-box
export function showChatBox(event, ele, 
 sections) 
{
  event.stopPropagation();

  let chatBox = ele.lastElementChild.
       style;

  sections.header.style.display = "none";
  sections.navBar.style.display = "none";

  chatBox.top = "100vh";
  chatBox.display = "block";

  setTimeout(()=> {
    chatBox.top = "0";
  }, 0);

};//end of showChatBox function
   


//function to hide chat-box
export function hideChatBox(event, ele,
 sections)
{
  event.stopPropagation();

  let chatBox = ele.parentNode.parentNode.
      style;
  console.log(chatBox);
  
  sections.header.style.display = "flex";
  sections.navBar.style.display = "flex";
  chatBox.display = "none"
};//end of hideChatBox function
