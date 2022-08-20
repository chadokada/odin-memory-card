import React from 'react';

const Card = ({num, name, handleCardClick}) => {
  const id = num;

  const handleClick = (event) => {
    handleCardClick(event)
  }

  return (
    <div className='card-container' id={id} onClick={handleClick}>
      <img 
      className="cardImg"
      alt={name} 
      cardnum={num}
      src={require(`../Images/${name}.png`)}
      />
    </div>
  )
}

export default Card;