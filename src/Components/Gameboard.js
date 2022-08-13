import React, { useState, useEffect } from 'react';
import Card from './Card';
import pic from '../Images/2_of_clubs.png'
import getRandomCard from '../Utilities/cardGenerator';


console.log(getRandomCard())


const Gameboard = () => {
  let [score, setScore] = useState(0);

  // Replace this when cards are implemented
  const nums = []
  const tempCards = []
  for (let i = 1; i < 13; i++ ){
    nums.push(i);
    tempCards.push(
      {
        name: getRandomCard(),
        clicked: 0
      }
    )
  }

  
  /*
  let [cards, setCards] = useState([
    {name: '2_of_clubs', clicked: 0},
    {name: 'ace_of_spades', clicked: 0},
    {name: '4_of_diamonds', clicked: 0},
  ])
  */

  let [cards, setCards] = useState(tempCards)
  
  /*
  setCards([   //Don't let this float outside a function or else infinite loops
    {name: '2_of_clubs', clicked: 0},
    {name: 'ace_of_spades', clicked: 0},
    {name: '4_of_diamonds', clicked: 0},
  ])
  */


  const handleCardClick = (clicked) => {
    if (clicked === 1) {
      setScore(score += 1);
    } else {
      setScore(0);
    }
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