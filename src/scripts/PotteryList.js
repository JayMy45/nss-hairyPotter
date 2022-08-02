import { usePottery } from "./PotteryCatalog.js"

/* 
1. Define and export a PotteryList function.  (I think it needs a parameter) ===it didn't need parameters

2. The PotteryList function must get the items to be sold from the PotteryCatalog.js module (use invoked function from PotteryCatalog as parameter).
- import PotteryCatalog.js
- define variable invoking usePottery import

3. The PotteryList function must convert each object in the array to an HTML representation string. Use the following template to generate the representations.

<section class="pottery" id="pottery--1">
  <h2 class="pottery__shape">Mug</h2>
  <div class="pottery__properties">
    Item weighs 3 grams and is 6 cm in height
  </div>
  <div class="pottery__price">Price is $20</div>
</section>

4. declare variable to store htmlString
*/
export const PotteryList = () => {
  // Invoke the function that you imported from the database module
  let storedPottery = usePottery();

  //start building a string of HTML tags starting with below article tag...
  let potteryHTMLString = `` //this tag anchors to exact same tag on index.html file.


  for (let listObject of storedPottery) {
    potteryHTMLString += `<section class="pottery" id="pottery--${listObject.id}">
        <h2 class="pottery__shape">${listObject.shape}</h2>
        <div class="pottery__properties">
          Item weighs ${listObject.weight} grams and is ${listObject.height} cm in height</div>
        <div class="pottery__price">Price is $${listObject.price}</div>
      </section>`
  }
  // potteryHTMLString += `</article>`
  return potteryHTMLString
}