// popup.js

// 1 - Select the section 'Dynamics'
// (...) index.html >> section class='dynamics' / id='Dynamics'
const dynamics = document.querySelector('#Dynamics');

function newPopup(card) {
  return `
  <div id="popup-card">
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
  </div>
`;}

const popupBox = document.createElement('div');
popupBox.className = 'popup-card';

const popupBg = document.createElement('div');
popupBg.classList.add('popup-bg', 'hide');

const popupContainer = document.createElement('div');
popupContainer.classList.add('popup-container', 'hide');

const popupCard = document.createElement('div');
popupCard.classList.add('popup-card');

const cardDataKeyTest = 1;
popupBox.innerHTML = newPopup(cardDataKeyTest);
// popupBox.append(newPopup(cardDataKeyTest));
popupContainer.appendChild(popupBox);
dynamics.appendChild(popupContainer);
dynamics.appendChild(popupBg);
const popupX =  document.querySelector('#popup-x');
// const popupTest = generatePop(1);

// dynamics.appendChild(popupTest);

const ctaCard1 = document.querySelector('#cta-card1');
const ctaCard2 = document.querySelector('#cta-card2');
const ctaCard3 = document.querySelector('#cta-card3');
const ctaCard4 = document.querySelector('#cta-card4');

ctaCard1.addEventListener('click', () => {
  body.style.height = '100vh';
  body.style.overflow = 'hidden';
  popupContainer.style.display = 'flex';
  popupBg.className = 'popup-bg';
  popupX.style.display = 'flex';
  // cardBox.className = 'hide';
});

popupX.addEventListener('click', () => {
  dynamics.className = 'dynamics';
  body.style.height = 'auto';
  body.style.overflow = 'visible';
  popupContainer.style.display = 'none';
  popupBg.className = 'hide';
  popupX.style.display = 'none';
});
