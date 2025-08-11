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
                        el.absoluteClass2 )

    deckOfCards.push(card)
})

deckOfCards.forEach(el => el.render(cardContainer))