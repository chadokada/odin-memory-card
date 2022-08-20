import React, { useState, useEffect } from 'react';
import getRandomCard from '../Utilities/cardGenerator';
import Gameboard from './Gameboard';
import Scoreboard from './Scoreboard';

const Gamecontroller = () => {
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
  let [bestScore, setBestScore] = useState(0);
  let [cards, setCards] = useState(getNewCards())
  
  const handleCardClick = (event) => {
    const cardNum = event.target.getAttribute('cardnum')
    let newCards = [...cards];
    newCards[cardNum].clicked += 1; 
    setCards(newCards)
  }
  
  const endOfGame = () => {
    setCards(getNewCards());

    if (score > bestScore) {
      setBestScore(score)
    }
  }

  useEffect(() => {
    let newScore = 0;

    for (let card of cards) {
      if (card.clicked > 1) {
        newScore = 0;
        endOfGame();
        break
      } else {
        newScore += card.clicked;
      }
    }
    setScore(newScore) 
  }, [cards])
  
  return (
    <div className="game-controller">
      <div className='game-title'>MEMORY GAME</div>
      <div className='game-rules'>
        <li>Select each card only once.</li>
        <li>Cards will shuffle after every selection.</li>
        <li>New cards will be dealt if a card is selected twice.</li>
      </div>
      <Gameboard 
        cards={cards} 
        DECK_SIZE={DECK_SIZE} 
        handleCardClick = {handleCardClick}
      />
      <Scoreboard 
        score={score}
        bestScore={bestScore}
      />
    </div>
  )
}

export default Gamecontroller;