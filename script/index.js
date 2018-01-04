var pushMe = document.querySelector('#pushMe');

pushMe.onclick = function(){
	pushMe.parentNode.removeChild(pushMe);
	var panel = document.createElement('div');
	var msg = document.createElement('p');
	var name = window.prompt ("Hi! What's your name?");
	var popTop = document.querySelector("#popTop")
	panel.setAttribute('class','msgBox');
	popTop.appendChild(panel);
	msg.textContent = name? "Hello, " + name +"!" : "Hello!";
	panel.appendChild(msg);

	var closeBtn = document.createElement('button');
	closeBtn.setAttribute('id','closeBtn');
	closeBtn.textContent = 'close';
	panel.appendChild(closeBtn);

	closeBtn.onclick = function(){
		panel.parentNode.removeChild(panel);
	}

}
