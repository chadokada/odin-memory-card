import React from 'react';

const Scoreboard = ({score, bestScore}) => {

  return(
    <div className='score-board'>
      <div className="score-container">
        <span>CURRENT SCORE</span> 
        <div className='score'>{score}</div>
      </div>
      <div className="score-container">
        <span>BEST SCORE</span>
        <div className='best-score'>{bestScore}</div>
      </div>
    </div>
  )
}

export default Scoreboard;