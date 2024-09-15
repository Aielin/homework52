import './App.css'
import CardComponent from './Components/Card.tsx'
import CardDeck from './lib/CardDeck.ts'
import {useState} from "react";
import Card from './lib/Card.ts';

interface Suits {
    diams: string;
    hearts: string;
    clubs: string;
    spades: string;
}
const App: React.FC = () => {
    const [hand, setHand] = useState<Card[]>([]);

    const dealCards = () => {
        const deck = new CardDeck();
        const cards = deck.getCards(5);
        setHand(cards);
    };
  return (
      <>
          <button onClick={dealCards}>Раздать карты</button>

          {hand.length > 0?  (
              <div className="playingCards faceImages">
                  {hand.map((card, index) => (
                      <CardComponent key={index} rank={card.rank} suit={card.suit as keyof Suits} />
                  ))}
              </div>
          ) : null }
      </>
  )
};
export default App
