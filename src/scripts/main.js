// Imports go first
import { makePottery } from './PotteryWheel.js'
import { firePottery } from './Kiln.js'
import { toSellOrNotToSell } from './PotteryCatalog.js'

// Make 5 pieces of pottery at the wheel
let mug = makePottery('flowerPot', 1, 17)




// Fire each piece of pottery in the kiln
let firePot = firePottery(mug, 5)

// Determine which ones should be sold, and their price
let sellOrNot = toSellOrNotToSell(mug, 5)

// Invoke the component function that renders the HTML list



console.log(firePot)
