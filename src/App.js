import './App.css';
import { useState } from 'react';

const cardImages =[
  {"src":"img/allium.jpg"}, 
  {"src":"img/bastu.jpg"}, 
  {"src":"img/blackDoggo.jpg"}, 
  {"src":"img/cuteDoggo.jpg"}, 
  {"src":"img/katrin-hauf-l5NYUg6bkFA-unsplash.jpg"}, 
  {"src":"img/pattern1.png"}, 
]

function App() {

const [cards, setCards]=useState([])
const [turns, setTurns]=useState(0)
const [showFront, setShowFront]=useState(0)

  // shuffle cards 
  const shuffleCards=()=>{
    const shuffledCards=[...cardImages, ...cardImages]
    .sort(()=> Math.random()-0.5)
    .map((card)=>({...card, id: Math.random() }))

    setCards(shuffledCards)
    setTurns(0)
  }

  return (
    <div className="App">
      <p>Hello World!</p>
      <button onClick={shuffleCards}>Deal!</button>
      <div>{cards.map(card => (
        <div className='card' key={card.id}>
         <div> 
<img className="front" src={card.src}></img>
<img src="img/background.png"  alt ="card back"/>
        </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default App;
