import React, { useState, useEffect } from 'react';

const Card = ({name, gameBoardCallBack}) => {
  const [clicked, setClicked] = useState(false)
  
  const id = `card${name}`;

  const handleClick = () => {

    if (clicked === false) {
      setClicked('fuggg')
    }

    console.log(`You clicked on Card ${name}`)
    gameBoardCallBack(`Card ${name} clicked? ${clicked}`)
  }


  useEffect(() => {
    document.getElementById(id).addEventListener('click', handleClick)
  }, [clicked])

  return (
    <div className='card-container' id={id}>
      Card {name}
    </div>
  )
}

export default Card;