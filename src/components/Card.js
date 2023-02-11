//import React from 'react';
import './Card.css'

export default  function Card ({card}) {
    console.log(card)
    return (
        <div className='card'>
        <div> 
<img className="front" src={card.src} alt="card front"/>
<img className="back" src="img/background.png"  alt ="card back"/>
       </div>
       </div>
    );
};

