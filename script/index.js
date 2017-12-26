
var html = document.querySelector('html');
var panel = document.createElement('div');
panel.setAttribute('class','msgBox');
html.appendChild(panel);

var name = prompt("Hey, what's your name?");


//creates the message to append/display
var msg = document.createElement('p');
(name)? msg.textContent = "Well, hello there, "+name+"!":msg.textContent = "Well, hello there, Captain Anonymous!";
panel.appendChild(msg);

//creates 'close' button, which removes the panel
var closeBtn = document.createElement('button');
closeBtn.setAttribute('id','closeBtn');
closeBtn.textContent = 'close';
panel.appendChild(closeBtn);

//listens for the 'close' button click
closeBtn.onclick = function(){
	panel.parentNode.removeChild(panel);
}
