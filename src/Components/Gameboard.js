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
        clicked: 0
      }
    )
  }

  let [cards, setCards] = useState(tempCards)


  const getNewCards = () => {
    const newCards = [];
    for (let i = 1; i < 13; i++ ){
      newCards.push(
        {
          name: getRandomCard(),
          clicked: 0
        }
      )
    }
    return newCards;
  }
  

  const handleCardClick = (event) => {
    const cardNum = event.target.getAttribute('cardnum')
    //const card = cards[cardNum]
    let newCards = [...cards];
    newCards[cardNum].clicked += 1; 
    
    setCards(newCards)


  }

  
  useEffect(() => {
    let newScore = 0;

    for (let card of cards) {
   
      if (card.clicked > 1) {
        newScore = 0;

        console.table(cards);
        console.log('******************************************************************')

        const newCards = getNewCards();
        //setCards(newCards)

        setCards(cards => (newCards))

        console.table(cards);
        console.log('///////////////////////////////////////////////////////////////////////')

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

export default Gameboard;