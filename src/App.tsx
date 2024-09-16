import './App.css'
import CardComponent from './Components/Card.tsx'
import CardDeck from './lib/CardDeck.ts'
import {useEffect, useState} from "react";
import Card from './lib/Card.ts';
import PokerHand from "./lib/PokerHand.ts";

const App: React.FC = () => {
    const [deck] = useState(new CardDeck());
    const [hand, setHand] = useState<Card[]>([]);
    const [cardCount, setCardCount] = useState(deck.getRemainingCards());
    const [results, setResults] = useState<string | null>(null);

    const dealCards = () => {
        const remainingCards = deck.getRemainingCards();

        if(remainingCards <= 0){
            setResults('Out of cards');
            setHand([]);
            return;
        }

        const numOfCardsToDeal = Math.min(5, remainingCards);
        const newHand = deck.getCards(numOfCardsToDeal);

        const pokerHand = new PokerHand(newHand);
        const result = pokerHand.getOutCome();

        setHand(newHand);
        setCardCount(deck.getRemainingCards());
        setResults(result);
    };

    useEffect(() => {
        if (hand.length > 0){
            const pokerHand = new PokerHand(hand);
            setResults(pokerHand.getOutCome());
        }
    }, [hand]);

    return (
        <div>
            <p>Card count: {cardCount}</p>
            <p>Result of round: {results || ''}</p>
            <button onClick={dealCards}>Get 5 cards</button>

            {hand.length > 0 &&  (
                <div className="playingCards faceImages">
                    {hand.map((card, index) => (
                        <CardComponent key={index} rank={card.rank} suit={card.suit} />
                    ))}
                </div>
            )}
        </div>
    );
};
export default App