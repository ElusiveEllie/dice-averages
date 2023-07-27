const numOfDice = 3;
const numOfSides = 6;
const numOfDrops = 1;
const modifier = 0;

function statRoll(
  diceNumber = 4,
  diceSides = 6,
  numberOfDrops = 1,
  modifier = 0,
  dropHighest = false
) {
  const dice = [];
  for (let i = 0; i < diceNumber; i++) {
    dice.push(Math.floor(Math.random() * diceSides) + 1);
  }
  if (dropHighest) {
    dice.sort((dieA, dieB) => dieA - dieB);
  } else {
    dice.sort((dieA, dieB) => dieB - dieA);
  }
  // console.log(dice)
  for (let i = 0; i < numberOfDrops; i++) {
    dice.pop();
  }
  return dice.reduce((total, die) => total + die) + modifier;
}

const numRolls = 1000000;
let total = 0;

for (let i = 0; i < numRolls; i++) {
  total += statRoll(numOfDice, numOfSides, numOfDrops, modifier);
}

total /= numRolls;

console.log(total);
