// popup.js

// 1 - Select the section 'Dynamics'
// (...) index.html >> section class='dynamics' / id='Dynamics'
// 2 - Apply class 'portfolio' to the section 'dynamics'
// (...) so it assumes the appearance of the outer card box
const dynamics = document.querySelector('#Dynamics');
dynamics.className = 'portfolio';
// dynamics.className = 'hide';

// 1 - Create a element (div) INSIDE the the dynamics box
// 2 - Apply class 'card' so it assumes the card apearance
// 3 - Create the CardBox content: h2 title + button
const cardBox = document.createElement('div');
cardBox.className = 'card';
const cardH2 = document.createElement('h2'); // h2
cardH2.textContent = 'This is a CardBox';
const callModal = document.createElement('button'); // button
callModal.classList.add('cta-button');
callModal.textContent = 'OPEN MODAL 1';

// 1 - Append h2 and the button to the div 'card'
// 2 - Append the 'card' div to the section 'dynamics'
cardBox.appendChild(cardH2);
cardBox.appendChild(callModal);
dynamics.appendChild(cardBox);

// const popupBg = document.querySelector('.popup-bg');
// const popupContainer = document.querySelector('.popup-container');
// const popupX = document.querySelector('.popup-x');

// 1 - Create popupBg, popupContainer, popupCard and its content
// 2 - Apply the proper classes
// 3 - Append one to another
// 4 - Append evrything to the dynamics section
const popupBg = document.createElement('div');
popupBg.classList.add('popup-bg', 'hide');
const popupContainer = document.createElement('div');
popupContainer.classList.add('popup-container', 'hide');
const popupCard = document.createElement('div');
popupCard.classList.add('popup-card');
const popupX = document.createElement('a');
popupX.textContent = 'X';
popupX.classList.add('popup-x', 'hide');
const popupH2 = document.createElement('h2');
popupH2.textContent = 'This is a PopupBox 2';

// 1 - Append h2 and the button to the div 'card'
// 2 - Append the 'card' div to the section 'dynamics'
popupCard.appendChild(popupX);
popupCard.appendChild(popupH2);
popupContainer.appendChild(popupCard);
dynamics.appendChild(popupBg);
dynamics.appendChild(popupContainer);

callModal.addEventListener('click', () => {
  body.style.height = '100vh';
  body.style.overflow = 'hidden';
  popupContainer.style.display = 'flex';
  popupBg.className = 'popup-bg';
  cardBox.classList.add = 'z-index-1';
  popupBg.classList.add = 'z-index-2';
  popupContainer.classList.add = 'z-index-3';
  popupX.style.display = 'flex';
});

popupX.addEventListener('click', () => {
  dynamics.className = 'portfolio';
  body.style.height = 'auto';
  body.style.overflow = 'visible';
  popupContainer.style.display = 'none';
  menuHamb.style.display = 'flex';
  popupX.style.display = 'none';
  popupBg.className = 'hide';
});


