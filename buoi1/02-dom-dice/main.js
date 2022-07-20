const btnEl = document.querySelector('.roll-dice')
const imgDice1 = document.querySelector('.dice-1')
const imgDice2 = document.querySelector('#dice-2')


const arrImages = [
  './images/dice1.png', // index 0 
  './images/dice2@2x.png', // index 1
  './images/dice3@2x.png', // index 2
  './images/dice4@2x.png', // index 3
  './images/dice5@2x.png', // index 4
  './images/dice6@2x.png', // index 5
]

function randomDiceIndex() {
  return Math.floor( Math.random() * 6 )
}

function handleClickRollDice() {
  const idx1 = randomDiceIndex()
  const idx2 = randomDiceIndex()

  const src1 = arrImages[idx1]
  const src2 = arrImages[idx2]

  imgDice1.src = src1
  imgDice2.src = src2
}

// Binding Events
btnEl.addEventListener('click', handleClickRollDice)