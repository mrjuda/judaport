// popup.js

// select the section 'Dynamics'
// index.html >> section class='dynamics' / id='Dynamics'
const dynamics = document.querySelector('#Dynamics');
// apply class 'portfolio' to the section 'dynamics'
// so it assumes the appearance of the outer card box
dynamics.className = 'portfolio';
// dynamics.className = 'hide';

// Create a element (div) INSIDE the the dynamics box
let cardBox = document.createElement('div');
// apply class 'card' so it assumes the card apearance
cardBox.className = 'card';
// create content (h2 title + button)
let title2 = document.createElement('h2'); // h2
title2.textContent = 'This is a CardBox';
let callModal = document.createElement('button'); // button
callModal.className = 'cta-button';
callModal.textContent = 'OPEN MODAL';

// append it to the div
cardBox.appendChild(title2);
cardBox.appendChild(callModal);

dynamics.appendChild(cardBox);
