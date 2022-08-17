import React, { useEffect } from 'react';
//import getRandomCard from '../Utilities/cardGenerator';

const Card = ({num, name, handleCardClick}) => {
  const id = num;

  useEffect((event) => {
    const handleClick = (event) => {
      handleCardClick(event)
      event.preventDefault();
      console.log(event.target)
    }
  
    document.getElementById(id).addEventListener('click', handleClick)

    return ()  => {
      document.getElementById(id).removeEventListener('click', handleClick)
    };
  }, [id])

  return (
    <div className='card-container' id={id}>
      <div>Card {num+1}</div>
      
        <img 
        className="cardImg"
         
        cardnum={num}
        src={require(`../Images/${name}.png`)}
        />
      
    </div>
  )
}

export default Card;