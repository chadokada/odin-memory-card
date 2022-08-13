import React, { useState, useEffect } from 'react';
import Card from './Card';
import pic from '../Images/2_of_clubs.png'
import getRandomCard from '../Utilities/cardGenerator';

console.log(getRandomCard())


const Gameboard = () => {
  let [score, setScore] = useState(0);

  const nums = []
  for (let i = 1; i < 13; i++ ){
    nums.push(i);
  }


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
      {nums.map((num) => {
        return(
          <Card 
            num={num} 
            key={num} 
            handleCardClick = {handleCardClick}
          />
        )    
      })}


      
    </div>
  )

}

export default Gameboard;