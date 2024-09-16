import Card from "./Card.ts";

class PokerHand {
    private hand: Card[];

    constructor(hand: Card[]) {
        this.hand = hand;
    }

    getOutCome(): string {
        const ranks = this.hand.map(card => card.rank);
        const suits = this.hand.map(card => card.suit);

        const isFlush = suits.length === 5 && suits.every (suit => suit === suits[0]);

        const rankCounts: { [key: string]: number} = {};
        ranks.forEach(rank => {
            rankCounts[rank] = (rankCounts[rank] || 0) + 1;
        });

        const counts = Object.values(rankCounts);


        if (counts.includes(4)) return 'Four of a kind';
        if (counts.includes(3) && counts.includes(2)) return 'Full house';
        if(isFlush) return 'Flush';
        if(counts.includes(3)) return 'Three of a kind';
        if(counts.filter(count => count === 2).length === 2) return 'Two pairs';
        if(counts.includes(2)) return 'One pair';

        return 'High card';
    }
}
export default PokerHand;