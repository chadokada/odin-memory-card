import React from 'react';
import Card from './Card';
import randomizeArrayIndicies from '../Utilities/randomizeArrayIndicies';

const Gameboard = ({cards, DECK_SIZE, handleCardClick}) => {

  return (
    <div className='gameboard-container'>
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
      </div>
    </div>
  )
}

export default Gameboard;