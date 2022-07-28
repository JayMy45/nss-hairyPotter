//define a variable in the module to have the primary key for each piece of pottery?

let n = 1;

export const makePottery = (valShape, valWeight, valHeight) => {
    const makePotteryObject = {
        shape: valShape, weight: valWeight, height: valHeight, id: n++
    }

    return makePotteryObject
}




/*
The function makePottery is being exported 
makePottery has three parameters that are variables that can be assigned a value as needed.
makePottery returns an object with shape weight and size where parameters within the array can be assigned values as needed.
*/