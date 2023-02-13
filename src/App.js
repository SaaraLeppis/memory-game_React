import './App.css';
import { useEffect, useState } from 'react';
import Card from './components/Card';
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
const [firstChoise, setFirstChoise]=useState(null)
const [secondChoise, setSecondChoise]=useState(null)



  // shuffle cards 
  const shuffleCards=()=>{
    const shuffledCards=[...cardImages, ...cardImages]
    .sort(()=> Math.random()-0.5)
    .map((card)=>({...card, id: Math.random() }))

    setCards(shuffledCards)
    setTurns(0)
  }


  //handle a choise 
  const handleChoise=(card)=>{
    firstChoise ? setSecondChoise (card) : setFirstChoise(card)
    
  }

  // compare 2 selected cards
  useEffect(()=>{
    if (firstChoise && secondChoise){
      if (firstChoise.src === secondChoise.src){
        console.log('Match! ')
        resetTurn()
      }
    else{
      console.log('no match')
      resetTurn()
    }}

  }, [firstChoise, secondChoise])


  //reset & increase turn 
  const resetTurn=()=>{
    setFirstChoise(null)
    setSecondChoise(null)
    // check following as in tutorial prev turnes 
    setTurns(turns+1)
  }


  return (
    <div className="App">
      <p>Hello World!</p>
      <button onClick={shuffleCards}>Deal!</button>
      <div className='card-grid'>{cards.map(card => (   
       <Card key={card.id} card={card} handleChoise={handleChoise}/>
       ))}
       </div>
    </div>
  );
}

export default App;
