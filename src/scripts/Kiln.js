import { makePottery } from "./PotteryWheel.js";
//import object array?
//create variable to hold makePottery
let potteryObject = makePottery()


// //declare variable for fireTemp
// let fireTemp = 3


//define export function firePottery with two parameters
//parameters: 1. Object (potteryObject) 2. fireTemp
export const firePottery = (potteryObject, fireTemp) => {
    //function adds new property fired set to true
    potteryObject.fired = true;
    //add  property cracked with conditional
    //if kiln is above 2200 degrees then cracked equals true
    if (fireTemp > 2200) {
        potteryObject.cracked = true;
    }
    //if kiln is less then or equal to 2200 then cracked is equal to false
    else {
        (fireTemp <= 2200)
        potteryObject.cracked = false;
    }

    return potteryObject
}






