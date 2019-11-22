const getName = document.querySelector('#getName');
const messenger = document.querySelector('#messenger');

function setCookie(cname, cvalue, exdays) {
	let d = new Date();
	d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
	let expires = 'expires=' + d.toUTCString();
	document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

function getCookie(cname) {
	let name = cname + '=';
	let ca = document.cookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return '';
}

function checkCookie() {
	let user = getCookie('username');
	if (user != '') {
		getName.style.display = 'none';
		messenger.textContent = `Welcome back, ${user}!`;
	} else {
		getName.style.display = 'block';
	}
}
checkCookie();

getName.onclick = function() {
	getName.parentNode.removeChild(getName);
	let panel = document.createElement('div');
	let input = document.createElement('input');
	input.setAttribute('type', 'value');
	let msg = document.createElement('p');
	panel.setAttribute('class', 'msgBox');
	messenger.appendChild(panel);
	msg.textContent = "What's your name?";
	panel.appendChild(input);
	panel.appendChild(msg);

	let inputName = document.createElement('button');
	inputName.setAttribute('id', 'inputName');
	inputName.textContent = 'X';
	panel.appendChild(inputName);

	inputName.onclick = function() {
		let val = input.value;
		setCookie('username', val, 0.5); //3rd param is qty of days till expiration
		panel.parentNode.removeChild(panel);
		messenger.textContent = `${val} is in the Sandbox!`;
	};

	document.addEventListener('keyup', (e) => {
		if (e.keyCode === 13) {
			inputName.click();
		}
	});
};

addCard = (parent) => {
	let div = document.createElement('div');
	div.className = 'card';
	parent.appendChild(div);
};

const content = document.querySelector('.content');
for (each of Array(8)) addCard(content); //{

const cards = document.querySelectorAll('div.card');
cards.forEach((x) => (x.textContent = 'sgerg'));
