// popup.js
const body2 = document.querySelector('body');

const cardData2 = [
  {
    // CARD 1 //
    cardId: 'card1',
    popupId: 'popup1',
    popupX: 'close-popup-1',
    imgSrc: 'images/pic1.png',
    imgAlt: 'EMC 2022 sneakpeak',
    project: 'EMC 2022',
    company: 'EDM Marketing',
    position: 'Front End Dev',
    year: '2022',
    cardP: `
    A home for EMC 2022's attendees with all 
    information related to the event
    `,
    popupP: `
    This project is intended to show EMC 2022's attendees 
    all information related to the EMC 2022. The Electronic 
    Dance Music Marketing Conference gathers electronic 
    music and event producers from all around the world since 
    1992. This year, it will be held in Natal, Brazil.
    `,
    cardCtaBtn: 'cta-card1',
    demoSrc: 'https://mrjuda.github.io/emc-2022/',
    githubSrc: 'https://github.com/mrjuda/emc-2022',
  },
  {
    // CARD 2 //
    cardId: 'card2',
    popupId: 'popup2',
    popupX: 'close-popup-2',
    imgSrc: 'images/pic2.png',
    imgAlt: 'Awesome books sneakpeak',
    project: 'Awesome Books',
    company: 'ABks Inc',
    position: 'Full Stack Dev',
    year: '2022',
    cardP: `
    A simple library management system. Its 
    purpose is to show ES6 functionalities, 
    especially JS modules.
    `,
    popupP: `
    This project is a simple library management system. 
    Its purpose is to show ES6 functionalities, especially 
    JS modules. It was built in an Ubuntu 20.04 + VS Code 
    1.65.2 environment + a lot of imagination and hard 
    work. Teamwork was also an essential tool to make 
    things happen, so thank you to all my coding partners 
    who worked with me so far.
    `,
    cardCtaBtn: 'cta-card2',
    demoSrc: 'https://mrjuda.github.io/books-es6/',
    githubSrc: 'https://github.com/mrjuda/books-es6',
  },
  {
    // CARD 3 //
    cardId: 'card3',
    popupId: 'popup3',
    popupX: 'close-popup-3',
    imgSrc: 'images/pic3.png',
    imgAlt: 'To-do list Sneakpeak',
    project: 'To-do List',
    company: 'TDL International',
    position: 'Front end Dev',
    year: '2021',
    cardP: `
    A minimalist version of a To-do List website. 
    
    `,
    popupP: `
    This is a minimalist version of a To-do List website. 
    Its purpose is to show ES6 functionalities, especially 
    JS modules. It was built in an Ubuntu 20.04 + VS Code 
    1.65.2 environment + a lot of imagination and hard 
    work. Teamwork was also an essential tool to make 
    things happen, so thank you to all my coding partners 
    who worked with me so far. 
    `,
    cardCtaBtn: 'cta-card3',
    demoSrc: 'https://mrjuda.github.io/to-do-list/',
    githubSrc: 'https://github.com/mrjuda/to-do-list',
  },
  {
    // CARD 4 //
    cardId: 'card4',
    popupId: 'popup4',
    popupX: 'close-popup-4',
    imgSrc: 'images/pic4.png',
    imgAlt: 'Bootstrap demo Sneakpeak',
    project: 'Bootstrap demo',
    company: 'BSP International',
    position: 'Lead Developer',
    year: '2019',
    cardP: `
    A bootstrap functionalities live demo. 
    `,
    popupP: `
    This is a bootstrap Portfolio project, made as part of 
    the Microverse Program. Made with Ubuntu 20.04 + 
    VS Code 1.64.2 + a lot of imagination and hard work. 
    Teamwork was also an essential tool to make things 
    happen, so thank you to all my coding partners who 
    worked with me so far.
    `,
    cardCtaBtn: 'cta-card4',
    demoSrc: 'https://mrjuda.github.io/judaportbootstrap/',
    githubSrc: 'https://github.com/mrjuda/judaportbootstrap',
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
            <a href="${cardData2[card].demoSrc}"><div class="cta-button-popup">
              See Live
              <img src="icons/export-blue.svg" alt="">
            </div></a>
            <a href="${cardData2[card].githubSrc}"><div class="cta-button-popup">
              See Source
              <img src="icons/github-blue.svg" alt="">
            </div></a>
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
  popupX.addEventListener('click', () => {{
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
