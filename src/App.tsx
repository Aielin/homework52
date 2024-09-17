import './App.css'
import CardComponent from './Components/Card.tsx'
import CardDeck from './lib/CardDeck.ts'
import {useState} from "react";
import Card from './lib/Card.ts';
import PokerHand from "./lib/PokerHand.ts";

const App: React.FC = () => {
    const [deck] = useState(new CardDeck());
    const [hand, setHand] = useState<Card[]>([]);
    const [cardCount, setCardCount] = useState(deck.getRemainingCards());
    const [results, setResults] = useState<string | null>(null);

    const dealCards = () => {
        if(deck.getRemainingCards() <= 0){
            setResults('Out of cards');
            setHand([]);
            return;
        }

        let newHand: Card[] = [];

        if(deck.getRemainingCards() <= 5){
            newHand = deck.getCards(deck.getRemainingCards());
            setCardCount(deck.getRemainingCards());
        } else {
            newHand = deck.getCards(5);
            setCardCount(deck.getRemainingCards());
        }
        setHand(newHand);
        const pokerHand = new PokerHand(newHand);
        const result = pokerHand.getOutCome();
        setResults(result);
    };

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