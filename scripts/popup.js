// popup.js
import { cardData } from './dynamicCards.js';
import { body } from './mobileMenu';

const dynamics = document.querySelector('#Dynamics');

function newPopup(card) {
  return `
    <div class="popup-header">
      <h2>${cardData[card].project}</h2>
      <div class="popup-x" id="popup-x">X</div>
    </div>
    <div class="popup-box">
      <ul class="categories">
        <li class="canopy">${cardData[card].company}</li>
        <li>•</li>
        <li>${cardData[card].position}</li>
        <li>•</li>
        <li>${cardData[card].year}</li>
      </ul>
      <div class="popup-img-container">
        <img class="popup-img" src="${cardData[card].imgSrc}" alt="${cardData[card].imgAlt}">
      </div>
      <div class="popup-bottom">
        <p>${cardData[card].popupP}</p> 
        <div class="popup-footer">
          <ul class="keyword">
            <li>html</li>
            <li>css</li>
            <li id="javinha">javaScript</li>
          </ul>
          <div class="gray-dash"> <!--gray line splitting contents--> </div>
          <div class="popup-cta">
            <div class="cta-button-popup">
              See Live
              <img src="icons/export-blue.svg" alt="">
            </div>
            <div class="cta-button-popup">
              See Source
              <img src="icons/github-blue.svg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
`;
}

const popupBg = document.createElement('div');
popupBg.classList.add('popup-bg', 'hide');

const popupContainer = document.createElement('div');
popupContainer.classList.add('popup-container', 'hide');

const popupCard = document.createElement('div');
popupCard.classList.add('popup-card');

const ctaCard1 = document.querySelector('#cta-card1');
const ctaCard2 = document.querySelector('#cta-card2');
const ctaCard3 = document.querySelector('#cta-card3');
const ctaCard4 = document.querySelector('#cta-card4');

ctaCard1.addEventListener('click', () => {
  const cardDataKeyTest = 0;
  dynamics.innerHTML = '';
  popupCard.innerHTML = newPopup(cardDataKeyTest);
  popupContainer.appendChild(popupCard);
  dynamics.appendChild(popupContainer);
  dynamics.appendChild(popupBg);
  body.style.height = '100vh';
  body.style.overflow = 'hidden';
  popupContainer.classList.remove('hide');
  popupBg.classList.remove('hide');
  const popupX = document.querySelector('#popup-x');
  // X Close
  popupX.addEventListener('click', () => {
    body.style.height = 'auto';
    body.style.overflow = 'visible';
    popupContainer.classList.add('hide');
    popupBg.classList.add('hide');
  });
});

ctaCard2.addEventListener('click', () => {
  const cardDataKeyTest = 1;
  dynamics.innerHTML = '';
  popupCard.innerHTML = newPopup(cardDataKeyTest);
  popupContainer.appendChild(popupCard);
  dynamics.appendChild(popupContainer);
  dynamics.appendChild(popupBg);
  body.style.height = '100vh';
  body.style.overflow = 'hidden';
  popupContainer.classList.remove('hide');
  popupBg.classList.remove('hide');
  const popupX = document.querySelector('#popup-x');
  // X close
  popupX.addEventListener('click', () => {
    body.style.height = 'auto';
    body.style.overflow = 'visible';
    popupContainer.classList.add('hide');
    popupBg.classList.add('hide');
  });
});

ctaCard3.addEventListener('click', () => {
  const cardDataKeyTest = 2;
  dynamics.innerHTML = '';
  popupCard.innerHTML = newPopup(cardDataKeyTest);
  popupContainer.appendChild(popupCard);
  dynamics.appendChild(popupContainer);
  dynamics.appendChild(popupBg);
  body.style.height = '100vh';
  body.style.overflow = 'hidden';
  popupContainer.classList.remove('hide');
  popupBg.classList.remove('hide');
  const popupX = document.querySelector('#popup-x');
  // X close
  popupX.addEventListener('click', () => {
    body.style.height = 'auto';
    body.style.overflow = 'visible';
    popupContainer.classList.add('hide');
    popupBg.classList.add('hide');
  });
});

ctaCard4.addEventListener('click', () => {
  const cardDataKeyTest = 3;
  dynamics.innerHTML = '';
  popupCard.innerHTML = newPopup(cardDataKeyTest);
  popupContainer.appendChild(popupCard);
  dynamics.appendChild(popupContainer);
  dynamics.appendChild(popupBg);
  body.style.height = '100vh';
  body.style.overflow = 'hidden';
  popupContainer.classList.remove('hide');
  popupBg.classList.remove('hide');
  const popupX = document.querySelector('#popup-x');
  // X close
  popupX.addEventListener('click', () => {
    body.style.height = 'auto';
    body.style.overflow = 'visible';
    popupContainer.classList.add('hide');
    popupBg.classList.add('hide');
  });
});
