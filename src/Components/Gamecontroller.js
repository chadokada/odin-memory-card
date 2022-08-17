import React, { useState, useEffect } from 'react';
import Card from './Card';
import getRandomCard from '../Utilities/cardGenerator';

const Gamecontroller = () => {
  let [score, setScore] = useState(0);

  // Replace this when cards are implemented
  const tempCards = []
  for (let i = 1; i < 13; i++ ){
    tempCards.push(
      {
        name: getRandomCard(),
        clicked: 0
      }
    )
  }

  let [cards, setCards] = useState(tempCards)
  

  useEffect(() => {
    let newScore = 0;

    for (let card of cards) {
      if (card.clicked > 1) {
        break
      } else {
        newScore += card.clicked;
      }
    }
    setScore(newScore)
    console.log(`Current score: ${score}`)
  
  }, [cards, score])

  const handleCardClick = (event) => {
    const cardNum = event.target.getAttribute('cardnum')
    const card = cards[cardNum]
    let newCards = [...cards];
    newCards[cardNum].clicked += 1; 
    setCards(newCards)
  }

  return (
    <div className="game-controller">
      
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
    
    </div>

  )



}