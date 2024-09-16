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

    getCard(): Card {
        const getIndex = Math.floor(Math.random() * this.deck.length);
        return this.deck.splice(getIndex, 1)[0];
    }

    getCards(howMany: number): Card[] {
        const drawnCards: Card[] = [];
        for ( let i = 0; i < howMany; i++ ) {
            const card = this.getCard();
            if (card){
                drawnCards.push(card);
            }
        }
        return drawnCards;
    }

    getRemainingCards(): number {
        return this.deck.length;
    }
}
export default CardDeck;