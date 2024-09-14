import './cards.css'

interface CardProps {
    rank: string;
    suit: keyof Suits;
}

interface Suits {
    diams: string;
    hearts: string;
    clubs: string;
    spades: string;
}

const Card: React.FC<CardProps> = ({rank, suit}) => {
    const suitsObj: Suits = {
        diams: '♦',
        hearts: '♥',
        clubs: '♣',
        spades: '♠',
    }

    return (
          <span className="card rank-k diams">
              <span className="rank">{rank}</span>
              <span className="suit">{suitsObj[suit]}</span>
          </span>
    )
};


export default Card;













