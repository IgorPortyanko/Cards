class Card {

    constructor(
                id, 
                rank, 
                iconNumber, 
                suit, 
                url, 
                altText, 
                suitClass,
                rotateClass,
                absoluteClass1,
                absoluteClass2,
                color
            )
        {
            this.id = id;
            this.rank = rank;
            this.iconNumber = iconNumber;
            this.suit = suit;
            this.url = url;
            this.altText = altText;
            this.suitClass = suitClass;
            this.rotateClass = rotateClass;
            this.absoluteClass1 = absoluteClass1;
            this.absoluteClass2 = absoluteClass2
            this.color = color
    }

    addIcon() {
        let icons = ''
        for(let i = 0; i < this.iconNumber; i++) {
            if(i === 0) {
                icons += `<img class="${this.absoluteClass1}" src="${this.url}" alt="${this.altText}">`
            } else 
            if(i === 1) {
                icons += `<img class="${this.absoluteClass2}" src="${this.url}" alt="${this.altText}">`
            } else 
            if((this.iconNumber - i) <= this.rotateClass) {
                icons += `<img class="rotate" src="${this.url}" alt="${this.altText}">`
            }
            else icons += `<img src="${this.url}" alt="${this.altText}">`
        }
        return icons
    }

    render(block) {
        let cardHTML = `
            <div class="card">
                    <div class="card__inner">
                        <div class="card__front">
                            <div class="card__rank">
                                <div class="card__rank-wrapper">
                                    <p class="card__rank-value ${this.color}">${this.rank}</p>
                                    <img src="${this.url}" alt="${this.altText}">
                                </div>
                            </div>
                            <div class="card__suit ${this.suitClass}">
                                ${this.addIcon()}
                            </div>
                            <div class="card__rank right-rank ">
                                <div class="card__rank-wrapper rotate">
                                    <p class="card__rank-value ${this.color}">${this.rank}</p>
                                    <img class="card__rank-icon" src="${this.url}" alt="${this.altText}">
                                </div>
                            </div>
                        </div>
                        <div class="card__back">
                            <img src="./assets/img/Screenshot_3.avif" alt="card-back">
                        </div>
                    </div>
                </div>
        `

        block.insertAdjacentHTML('beforeend', cardHTML)
    }
}