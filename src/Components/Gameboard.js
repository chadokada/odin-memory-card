import React, { useState, useEffect } from 'react';
import Card from './Card';
import getRandomCard from '../Utilities/cardGenerator';
import randomizeArrayIndicies from '../Utilities/randomizeArrayIndicies';

const Gameboard = () => {
  const DECK_SIZE = 12

  const getNewCards = () => {
    const newCards = [];
    for (let i = 1; i < DECK_SIZE + 1; i++ ){
      newCards.push(
        {
          name: getRandomCard(),
          clicked: 0
        }
      )
    }
    return newCards;
  }

  let [score, setScore] = useState(0);
  let [cards, setCards] = useState(getNewCards())
  
  const handleCardClick = (event) => {
    const cardNum = event.target.getAttribute('cardnum')
    let newCards = [...cards];
    newCards[cardNum].clicked += 1; 
    setCards(newCards)
  }
  
  useEffect(() => {
    let newScore = 0;

    for (let card of cards) {
      if (card.clicked > 1) {
        newScore = 0;
        setCards(getNewCards());
        break
      } else {
        newScore += card.clicked;
      }
    }
    setScore(newScore) 
  }, [cards])
  
  useEffect(() => {
    const scoreDiv = document.querySelector('.score')
    scoreDiv.innerHTML = score;
    console.log(`Current score: ${score}`)
  }, [score])

  return (
    <div className="game-controller">
      <div className="score"></div>
      <div className="gameboard">

        {randomizeArrayIndicies(DECK_SIZE).map((random) => {
            const card = cards[random]
            return(
              <Card 
                num={random}
                name={card.name} 
                key={random} 
                handleCardClick = {handleCardClick}
              />
            )
          })
        }

      {/*
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
      */}

      </div>
    </div>
  )

}

export default Gameboard;