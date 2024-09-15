import Card from './Card.ts';

const suits =['diams', 'hearts', 'clubs', 'spades'];
const ranks =['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

class CardDeck {
    private deck: Card [];

    constructor() {
        this.deck = [];
        suits.forEach(suit => {
            ranks.forEach(rank => {
                this.deck.push(new Card (rank, suit));
            })
        })
    }
}

export default CardDeck;