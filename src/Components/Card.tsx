import './cards.css';
import React from 'react';


interface CardProps {
    rank: string;
    suit: string;
}

const Card: React.FC<CardProps> = ({rank, suit}) => {
    const suitMap: {[key:string]: string} = {
        diams: '♦',
        hearts: '♥',
        clubs: '♣',
        spades: '♠',
    }

    return (
        <div className="playingCards faceImages">
             <span className={`card rank-${rank.toLowerCase()} ${suit}`}>
              <span className="rank">{rank}</span>
              <span className="suit">{suitMap[suit]}</span>
          </span>
        </div>
    )
};

export default Card;













