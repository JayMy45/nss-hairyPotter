// Imports go first
import { makePottery } from './PotteryWheel.js'
import { firePottery } from './Kiln.js'


// Make 5 pieces of pottery at the wheel
let mug = makePottery('flowerPot', 1, 17)




// Fire each piece of pottery in the kiln
let firePot = firePottery(mug, 3000)

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list



console.log(firePot)
