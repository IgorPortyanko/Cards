const cardContainer = document.querySelector('.card-container');

deckOfCards = []

cards.map(el => {
    let card = new Card(el.id, 
                        el.rank, 
                        el.iconNumber, 
                        el.suit, 
                        el.url, 
                        el.altText, 
                        el.suitClass, 
                        el.rotateClass, 
                        el.absoluteClass1, 
                        el.absoluteClass2,
                        el.color)

    deckOfCards.push(card)
})

deckOfCards.forEach(el => el.render(cardContainer))


const allCards = document.querySelectorAll('.card__inner');

setInterval(() => {
  const randomCard = allCards[Math.floor(Math.random() * cards.length)];
  
  randomCard.classList.remove('flip-back');
  randomCard.classList.add('flip');

  setTimeout(() => {
    randomCard.classList.remove('flip');
    randomCard.classList.add('flip-back');
  }, 1000);

}, 2000);