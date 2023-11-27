import "./App.css";
import { useEffect, useState } from "react";
import Card from "./components/Card";
const cardImages = [
  { src: "img/allium.jpg", matched: false },
  { src: "img/bastu.jpg", matched: false },
  { src: "img/blackDoggo.jpg", matched: false },
  { src: "img/cuteDoggo.jpg", matched: false },
  { src: "img/katrin-hauf-l5NYUg6bkFA-unsplash.jpg", matched: false },
  { src: "img/pattern1.png", matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [firstChoise, setFirstChoise] = useState(null);
  const [secondChoise, setSecondChoise] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setFirstChoise(null);
    setSecondChoise(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  //handle a choise
  const handleChoise = (card) => {
    firstChoise ? setSecondChoise(card) : setFirstChoise(card);
  };

  // compare 2 selected cards
  useEffect(() => {
    if (firstChoise && secondChoise) {
      setDisabled(true);
      if (firstChoise.src === secondChoise.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === firstChoise.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
    // eslint-disable-next-line
  }, [firstChoise, secondChoise]);

  //reset & increase turn
  const resetTurn = () => {
    setFirstChoise(null);
    setSecondChoise(null);
    // check following as in tutorial prevTurns => prevTurns +1
    setTurns(turns + 1);
    setDisabled(false);
  };

  //start new game automatically onlaunch
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="App">
      <h1>memory</h1>
      <button onClick={shuffleCards}>New game!</button>
      <div className="card-grid">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleChoise={handleChoise}
            flipped={
              card === firstChoise || card === secondChoise || card.matched
            }
            disabled={disabled}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
}

export default App;
