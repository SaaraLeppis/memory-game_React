//import React from 'react';
import './Card.css'

export default  function Card ({card, handleChoise}) {
const clickHandler=() =>{
    handleChoise(card)    
}
    return (
        <div className='card'>
        <div> 
<img className="front" src={card.src} alt="card front"/>
<img className="back" src="img/background.png" onClick={clickHandler} alt ="card back"/>
       </div>
       </div>
    );
};

