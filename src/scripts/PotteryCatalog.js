/* 
-----------Part 1----------
1. define a variable with the value of empty array to store pottery to be sold.
   storePottery = [];
2. define an export function named toSellOrNotToSell - it will determine if a piece of pottery should be sold
3. toSellOrNotToSell function must accept a pottery object as input 
       ***need to import potteryObject***
4. if the weight of the piece is greater than or equal to (>=) 6 then the function must add a price property of 40
5. if the weight of the piece of pottery is less than 6 then the add a price property of 20
6. if the pottery is not cracked add the object to the module-level array of items to be sold
           if potteryObject.cracked === false ---> storePottery.push(potteryObject)


----------Part 2------------
1. define and export a function named usePottery to return a copy of the array of sold items to be sold...
*/

import { makePottery } from "./PotteryWheel.js";
const potteryObject = makePottery()



// define a variable with the value of empty array to store pottery to be sold.

const storePottery = [];
// let potWeight = 30;

export const toSellOrNotToSell = (potteryObject) => {
    // if the weight of the piece is greater than or equal to (>=) 6 then the function must add a price property of 40
    if (potteryObject.weight >= 6 && potteryObject.cracked === false) {
        potteryObject.price = 40;
        storePottery.push(potteryObject)
        // if the weight of the piece of pottery is less than 6 then the add a price property of 20
    } else if (potteryObject.weight < 6 && potteryObject.cracked === false) {
        potteryObject.price = 20;
        storePottery.push(potteryObject)

        // if the pottery is not cracked add the object to the module-level array of items to be sold
    }
    return potteryObject
}

//define and export a function named usePottery to return a copy of the array of sold items to be sold...
export const usePottery = () => {
    return storePottery.map(storePottery => ({ ...storePottery }))
}
