// Imports go first
import { makePottery } from './PotteryWheel.js'
import { firePottery } from './Kiln.js'
import { toSellOrNotToSell } from './PotteryCatalog.js'
import { PotteryList } from './PotteryList.js'

// Make 5 pieces of pottery at the wheel
//pieces of pottery ('shape', weight, height)
//need to store results of invoked function makePottery in declared variable to use as an Object (because makePotter creates objects with the information provided) because will be using the variable in future invoked function that need object inputs..
let mug = makePottery('Mug', 1, 17)
let ornament = makePottery("Ornament", 2, 5)
let platter = makePottery("Platter", 7, 2)
let vase = makePottery('Vase', 7, 30)
let bowl = makePottery('Bowl', 5, 5)




// Fire each piece of pottery in the kiln
//********when invoking function parameters are (valShape, KilnTemperature)
//there no need to declare a variable to invoke the function as seen in the first one below...instead you can just invoke...
let fireMug = firePottery(mug, 1901)
firePottery(ornament, 2000)
firePottery(platter, 5)
firePottery(vase, 2200)
firePottery(bowl, 1900)

// Determine which ones should be sold, and their price
//*********when invoking function parameters are (whichever piece of pottery from the PotteryWheel above. ex. mug = makePottery('mug', 1, 17))
//there no need to declare a variable to invoke the function as seen in the first one below...instead you can just invoke...
let sellMugOrNot = toSellOrNotToSell(mug)
toSellOrNotToSell(ornament)
toSellOrNotToSell(platter)
toSellOrNotToSell(vase)
toSellOrNotToSell(bowl)

// Invoke the component function that renders the HTML list
//no need to declare a variable to call the functions as seen below (listD) you can directly invoke it in the parentHTMLElement.innerHTML...!

// const listeD = PotteryList()

const parentHTMLElement = document.querySelector(".potteryList")     // (".potteryList") is the class the function looks for in index.html to place scripted HTMLString from PotteryList

parentHTMLElement.innerHTML = PotteryList()

// console.log(firePot)
