// popup.js
const body2 = document.querySelector('body');

const cardData2 = [
  {
    // CARD 1 //
    cardId: 'card1',
    popupId: 'popup1',
    popupX: 'close-popup-1',
    imgSrc: 'images/pic1.png',
    imgAlt: 'Tonic sneakpeak',
    project: 'Tonic',
    company: 'CANOPY',
    position: 'Back End Dev',
    year: '2014',
    cardP: `
    A daily selection of privately personalized 
    reads; no accounts or sign-ups required
    `,
    popupP: `
    AAA 111 - Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry. Lorem Ipsum has been the 
    industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled 
    it to make a type specimen book. It has survived not 
    only five centuries, but also the leap into electronic 
    typesetting, remaining essent
    `,
    cardCtaBtn: 'cta-card1',
    demoSrc: '#',
    githubSrc: '#',
  },
  {
    // CARD 2 //
    cardId: 'card2',
    popupId: 'popup2',
    popupX: 'close-popup-2',
    imgSrc: 'images/pic2.png',
    imgAlt: 'Multi-Post Stories sneakpeak',
    project: 'Multi-Post Stories',
    company: 'Facebook',
    position: 'Full Stack Dev',
    year: '2016',
    cardP: `
    A daily selection of privately personalized 
    reads; no accounts or sign-ups required
    `,
    popupP: `
    BBB 222 - Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry. Lorem Ipsum has been the 
    industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled 
    it to make a type specimen book. It has survived not 
    only five centuries, but also the leap into electronic 
    typesetting, remaining essent
    `,
    cardCtaBtn: 'cta-card2',
    demoSrc: '#',
    githubSrc: '#',
  },
  {
    // CARD 3 //
    cardId: 'card3',
    popupId: 'popup3',
    popupX: 'close-popup-3',
    imgSrc: 'images/pic3.png',
    imgAlt: 'Facebook 360 Sneakpeak',
    project: 'Facebook 360',
    company: 'Facebook',
    position: 'Full Stack Dev',
    year: '2017',
    cardP: `
    A daily selection of privately personalized 
    reads; no accounts or sign-ups required
    `,
    popupP: `
    CCC 333 - Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry. Lorem Ipsum has been the 
    industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled 
    it to make a type specimen book. It has survived not 
    only five centuries, but also the leap into electronic 
    typesetting, remaining essent
    `,
    cardCtaBtn: 'cta-card3',
    demoSrc: '#',
    githubSrc: '#',
  },
  {
    // CARD 4 //
    cardId: 'card4',
    popupId: 'popup4',
    popupX: 'close-popup-4',
    imgSrc: 'images/pic4.png',
    imgAlt: 'Uber Navigation Sneakpeak',
    project: 'Uber Navigation',
    company: 'Uber',
    position: 'Lead Developer',
    year: '2019',
    cardP: `
    A daily selection of privately personalized 
    reads; no accounts or sign-ups required
    `,
    popupP: `
    DDD 444 - Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry. Lorem Ipsum has been the 
    industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled 
    it to make a type specimen book. It has survived not 
    only five centuries, but also the leap into electronic 
    typesetting, remaining essent
    `,
    cardCtaBtn: 'cta-card4',
    demoSrc: '#',
    githubSrc: '#',
  },
];

const dynamics = document.querySelector('#Dynamics');

function newPopup(card) {
  return `
    <div class="popup-header">
      <h2>${cardData2[card].project}</h2>
      <div class="popup-x" id="popup-x">X</div>
    </div>
    <div class="popup-box">
      <ul class="categories">
        <li class="canopy">${cardData2[card].company}</li>
        <li>•</li>
        <li>${cardData2[card].position}</li>
        <li>•</li>
        <li>${cardData2[card].year}</li>
      </ul>
      <div class="popup-img-container">
        <img class="popup-img" src="${cardData2[card].imgSrc}" alt="${cardData2[card].imgAlt}">
      </div>
      <div class="popup-bottom">
        <p>${cardData2[card].popupP}</p> 
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
  const cardData2KeyTest = 0;
  dynamics.innerHTML = '';
  popupCard.innerHTML = newPopup(cardData2KeyTest);
  popupContainer.appendChild(popupCard);
  dynamics.appendChild(popupContainer);
  dynamics.appendChild(popupBg);
  body2.style.height = '100vh';
  body2.style.overflow = 'hidden';
  popupContainer.classList.remove('hide');
  popupBg.classList.remove('hide');
  const popupX = document.querySelector('#popup-x');
  // X Close
  popupX.addEventListener('click', () => {
    body2.style.height = 'auto';
    body2.style.overflow = 'visible';
    popupContainer.classList.add('hide');
    popupBg.classList.add('hide');
  });
});

ctaCard2.addEventListener('click', () => {
  const cardData2KeyTest = 1;
  dynamics.innerHTML = '';
  popupCard.innerHTML = newPopup(cardData2KeyTest);
  popupContainer.appendChild(popupCard);
  dynamics.appendChild(popupContainer);
  dynamics.appendChild(popupBg);
  body2.style.height = '100vh';
  body2.style.overflow = 'hidden';
  popupContainer.classList.remove('hide');
  popupBg.classList.remove('hide');
  const popupX = document.querySelector('#popup-x');
  // X close
  popupX.addEventListener('click', () => {
    body2.style.height = 'auto';
    body2.style.overflow = 'visible';
    popupContainer.classList.add('hide');
    popupBg.classList.add('hide');
  });
});

ctaCard3.addEventListener('click', () => {
  const cardData2KeyTest = 2;
  dynamics.innerHTML = '';
  popupCard.innerHTML = newPopup(cardData2KeyTest);
  popupContainer.appendChild(popupCard);
  dynamics.appendChild(popupContainer);
  dynamics.appendChild(popupBg);
  body2.style.height = '100vh';
  body2.style.overflow = 'hidden';
  popupContainer.classList.remove('hide');
  popupBg.classList.remove('hide');
  const popupX = document.querySelector('#popup-x');
  // X close
  popupX.addEventListener('click', () => {
    body2.style.height = 'auto';
    body2.style.overflow = 'visible';
    popupContainer.classList.add('hide');
    popupBg.classList.add('hide');
  });
});

ctaCard4.addEventListener('click', () => {
  const cardData2KeyTest = 3;
  dynamics.innerHTML = '';
  popupCard.innerHTML = newPopup(cardData2KeyTest);
  popupContainer.appendChild(popupCard);
  dynamics.appendChild(popupContainer);
  dynamics.appendChild(popupBg);
  body2.style.height = '100vh';
  body2.style.overflow = 'hidden';
  popupContainer.classList.remove('hide');
  popupBg.classList.remove('hide');
  const popupX = document.querySelector('#popup-x');
  // X close
  popupX.addEventListener('click', () => {
    body2.style.height = 'auto';
    body2.style.overflow = 'visible';
    popupContainer.classList.add('hide');
    popupBg.classList.add('hide');
  });
});
