function getRandomCard(){
  const values = [
    '2',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'jack',
    'queen',
    'jack',
    'jack'
  ];
  
  const suits = [
    'clubs',
    'spades',
    'diamonds',
    'hearts'
  ];
  
  const valIndex = Math.floor(Math.random() * values.length)
  const suitIndex = Math.floor(Math.random() * suits.length)

  return `${values[valIndex]}_of_${suits[suitIndex]}`
}

export default getRandomCard;