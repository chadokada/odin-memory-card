import React, { useState, useEffect } from 'react';
import Card from './Card';

const Gameboard = () => {

  const nums = []

  for (let i = 1; i < 13; i++ ){
    nums.push(i);
  }


  const testCallBack = (cardData) => {
    console.log(cardData);
  }

  return (

    <div className="gameboard">
      {nums.map((num) => {
        return(
          <Card 
            name={num} 
            key={num} 
            gameBoardCallBack = {testCallBack}
          />
        )    
      })}
      
    </div>
  )

}

export default Gameboard;