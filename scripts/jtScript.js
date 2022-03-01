let li = document.createElement('li');

// select the ul menu element
const menu = document.querySelector('#menuDom');
li.textContent = 'Products';
menu.appendChild(li);

li = document.createElement('li');
li.textContent = 'About Us';

menu.appendChild(li);