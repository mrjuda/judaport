let li = document.createElement('li');

// select the ul menu element
const menu = document.querySelector('#menuDom');
li.textContent = 'Products';
menu.appendChild(li);

li = document.createElement('li');
li.textContent = 'About Us';


menu.appendChild(li);


let div = document.querySelector('#content');
div.classList.add('socials');


let person = {
  firstName: 'John',
  lastName: 'Doe'
};

person.firstName = 'Jane';
person.age = 23;

let personFirstName = person.firstName;
let personLastName = person['lastName'];
let personAge = person.age;

// Example 1
let btn1 = document.querySelector('#btn1');
function display(){
  alert('It was clicked! (1)');
  alert(personFirstName);
}
btn1.addEventListener('click', display);

// Example 2 (shorter)
let btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', function(){
  alert('It was clicked! (2)')
  alert(personLastName);
  alert(personAge);
});

let empty = {};



