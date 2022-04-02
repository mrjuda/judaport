// dynamicCards.js

const cardData = [
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

function newPortfolioCard(card) {
  return `
<div class="card" id='${card.cardId}'>
  <div class='card-img'>
    <img src='${card.imgSrc}' alt='${card.imgAlt}'>
  </div>
  <div class='card-text'>
    <h2>${card.project}</h2>
    <ul class='categories'>
        <li class='canopy'>${card.company}</li>
        <li>•</li>
        <li>${card.position}</li>
        <li>•</li>
        <li>${card.year}</li>
      </ul>
      <p>${card.cardP}</p>
      <ul class='keyword'>
        <li id="test-trigger-${card.cardId}">html</li>
        <li>css</li>
        <li>javaScript</li>
      </ul>
      <div class='cta-button' id='${card.cardCtaBtn}'>
        See Project
      </div>
  </div>
</div>
`;
}

const generateCard = cardData.map((card, key) => {
  const cardContainer = document.createElement('div');
  cardContainer.className = 'card';
  if (key % 2 === 1) {
    cardContainer.classList.add('odd-card');
  }
  cardContainer.innerHTML = newPortfolioCard(card);
  return cardContainer;
});

const portfolio = document.getElementById('Portfolio');
const cardQtt = generateCard.length;
for (let i = 0; i < cardQtt; i += 1) {
  portfolio.appendChild(generateCard[i]);
}
