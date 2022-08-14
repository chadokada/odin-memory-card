import React, { useState, useEffect } from 'react';
import Card from './Card';
import getRandomCard from '../Utilities/cardGenerator';

const Gameboard = () => {
  let [score, setScore] = useState(0);

  // Replace this when cards are implemented
  const tempCards = []
  for (let i = 1; i < 13; i++ ){
    tempCards.push(
      {
        name: getRandomCard(),
        clicked: false
      }
    )
  }

  let [cards, setCards] = useState(tempCards)
  

  const handleCardClick = (event) => {
    const cardNum = event.target.getAttribute('cardnum')
    const card = cards[cardNum]

    const tempCards = JSON.parse(JSON.stringify(cards));
    const tempCard = tempCards[cardNum]
    
    if (card.clicked === false) {
      tempCard.clicked = true;
      setScore(score += 1)

    } else {
      setScore(0);
    }
    
    setCards(tempCards)
  }

  useEffect(() => {
    console.log(`Current score: ${score}`)
  }, [score])

  return (

    <div className="gameboard">
      {cards.map((card, index) => {
        return(
          <Card 
            num={index}
            name={card.name} 
            key={index} 
            handleCardClick = {handleCardClick}
          />
        )    
      })}


      
    </div>
  )

}

export default Gameboard;