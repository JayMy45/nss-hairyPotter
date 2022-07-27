//define a variable in the module to have the primary key for each piece of pottery?

let n = 1;

export const makePottery = (valShape, valWeight, valHeight) => {
    const makePotteryObject = {
        shape: valShape, weight: valWeight, height: valHeight, id: n++
    }

    return makePotteryObject
}

// console.log(makePottery('oval', 2, 3));