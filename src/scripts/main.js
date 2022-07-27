// Imports go first
import { makePottery } from './PotteryWheel.js'
import { firePottery } from './Kiln.js'
import { toSellOrNotToSell } from './PotteryCatalog.js'
import { PotteryList } from './PotteryList.js'

// Make 5 pieces of pottery at the wheel
let mug = makePottery('Mug', 1, 17)
let ornament = makePottery("Ornament", 2, 5)
let platter = makePottery("Platter", 7, 2)




// Fire each piece of pottery in the kiln
let fireMug = firePottery(mug, 5)
let fireOrnament = firePottery(ornament, 5)
let firePlatter = firePottery(platter, 5)

// Determine which ones should be sold, and their price
let sellOrNot = toSellOrNotToSell(mug, 5)
let sellOrNot = toSellOrNotToSell(ornament, 5)
let sellOrNot = toSellOrNotToSell(platter, 5)

// Invoke the component function that renders the HTML list

const listeD = PotteryList()

const parentHTMLElement = document.querySelector(".potteryList")     // (".potteryList") is the class the function looks for in index.html to place scripted HTMLString from PotteryList

parentHTMLElement.innerHTML = listeD

// console.log(firePot)
