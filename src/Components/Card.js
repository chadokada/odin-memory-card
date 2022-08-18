import React from 'react';

const Card = ({num, name, handleCardClick}) => {
  const id = num;

  const handleClick = (event) => {
    handleCardClick(event)
  }

  /*
  NEED TO UNDERSTAND WHY THIS IMPLEMENTATION USED OLD STATE

  useEffect((event) => { 
  
    const handleClick = (event) => {
      handleCardClick(event)
      //event.preventDefault();
    }

    document.getElementById(id).addEventListener('click', handleClick)

    return ()  => {
      document.getElementById(id).removeEventListener('click', handleClick)
    };
  }, [id])
  */

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