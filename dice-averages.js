// Constants for configuring dice roll simulation
const numOfDice = 4; // Sets the number of dice to roll.
const numOfSides = 6; // Sets the number of sides on each dice.
const numOfDrops = 1; // Sets the number of dice to drop.
const modifier = 0; // Optional modifier to add or subtract a value from total.
const dropHighest = false; // Set to true to drop highest dice instead of lowest.

/**
 * Simulates rolling dice and calculates the sum of the remaining dice values
 *
 * @param {number} diceNumber - Number of dice to roll.
 * @param {number} diceSides - Number of sides on each dice.
 * @param {number} numberOfDrops - Number of dice to drop.
 * @param {number} modifier - Optional modifier to add or subtract a value from total after dice rolls are calculated.
 * @param {boolean} dropHighest - Flag to determine whether to drop the highest dice rolls instead of lowest.
 * @returns {number} The sum of the remaining dice values after dropping highest/lowest rolls, plus the modifier.
 */

function statRoll(
  diceNumber = 4,
  diceSides = 6,
  numberOfDrops = 1,
  modifier = 0,
  dropHighest = false
) {
  // Array to store the values of rolled dice
  const dice = [];

  // Roll the dice and store the values in the dice array
  for (let i = 0; i < diceNumber; i++) {
    dice.push(Math.floor(Math.random() * diceSides) + 1);
  }

  // Sort the dice array and drop the highest or lowest dice rolls based on dropHighest flag
  if (dropHighest) {
    dice.sort((dieA, dieB) => dieA - dieB);
  } else {
    dice.sort((dieA, dieB) => dieB - dieA);
  }

  // Drop the specified number of dice rolls
  for (let i = 0; i < numberOfDrops; i++) {
    dice.pop();
  }

  // Calculate the total sum of the remaining dice values and add the modifier
  return dice.reduce((total, die) => total + die) + modifier;
}

const numRolls = 1000000; // Number of times to repeat the dice rolling process
let total = 0; // Variable to accumulate the total sum of all rolls

// Perform the simulation for a large number of rolls
for (let i = 0; i < numRolls; i++) {
  total += statRoll(numOfDice, numOfSides, numOfDrops, modifier, dropHighest);
}

// Calculate the average total value
total /= numRolls;

// Output the average total to the console
console.log(total);
