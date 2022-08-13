import React, { useState, useEffect } from 'react';
import getRandomCard from '../Utilities/cardGenerator';

const Card = ({num, handleCardClick}) => {
  let [clicked, setClicked] = useState(0)

  const id = `card${num}`;

  useEffect(() => {
    const handleClick = () => {
      setClicked(clicked += 1)
      handleCardClick(clicked)
    }
  
    document.getElementById(id).addEventListener('click', handleClick)

    return ()  => {
      document.getElementById(id).removeEventListener('click', handleClick)
    };
  }, [id, clicked])

  return (
    <div className='card-container' id={id}>
      Card {num}
      <img 
        className="cardImg"
        src={require('../Images/2_of_clubs.png')}
        />
    </div>
  )
}

export default Card;