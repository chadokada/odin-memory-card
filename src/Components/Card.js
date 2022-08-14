import React, { useEffect } from 'react';
//import getRandomCard from '../Utilities/cardGenerator';

const Card = ({num, name, handleCardClick}) => {
  const id = name;

  useEffect((event) => {
    const handleClick = (event) => {
      handleCardClick(event)
    }
  
    document.getElementById(id).addEventListener('click', handleClick)

    return ()  => {
      document.getElementById(id).removeEventListener('click', handleClick)
    };
  }, [id])

  return (
    <div className='card-container' >
      <div>Card {num+1}</div>
      
        <img 
        className="cardImg"
        id={id} 
        cardnum={num}
        src={require(`../Images/${name}.png`)}
        />
      
    </div>
  )
}

export default Card;