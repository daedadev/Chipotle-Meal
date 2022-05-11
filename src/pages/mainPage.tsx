import { useEffect, useState } from 'react';
import type { Order, Proteins, Extras } from '../types';
import './mainPage.css';
import { mealTypes, proteinTypes, beanTypes, riceTypes, salsaTypes, toppings, extras } from "../data.js";

function App() {

  const [randomOrder, setRandomOrder] = useState<Order>()

  // Return random number in array length
  function getRandom(currentArray: string[] | Proteins[] | Extras[]){
    return Math.floor(Math.random() * currentArray.length)
  }

  // Return an array consisting of a random number of random elements
  function getMultipleRandom(currentArray: Extras[] | string[], numberOfItems: number){
    let sortedArray: string[] | Extras[] = []

    if(numberOfItems > 0){
      sortedArray = currentArray.sort(() => 0.5 - Math.random())
    }else{
      sortedArray[0] = currentArray[getRandom(currentArray)];
      return sortedArray;
    }

    return sortedArray.slice(0, numberOfItems+1);

  }

  // Get the random order
  function randomizeOrder(){

    // Get random meal
    let randomMeal :string = mealTypes[getRandom(mealTypes)];

    // Get random protein
    let proteinIndex :number = getRandom(proteinTypes);
    let randomProtein :string = proteinTypes[proteinIndex].name;
    let randomProteinPrice :number = proteinTypes[proteinIndex].cost;

    // Get random bean
    let randomBean :string = beanTypes[getRandom(beanTypes)];

    // Get random rice
    let randomRice :string = riceTypes[getRandom(riceTypes)];

    // Get random salsa
    let randomSalsa :string = salsaTypes[getRandom(salsaTypes)];

    // Get random toppings
    let amountOfToppings = getRandom(toppings);
    let randomToppings = getMultipleRandom(toppings, amountOfToppings);

    // Get random extras
    let amountOfExtras = getRandom(extras);
    let randomExtras = getMultipleRandom(extras, amountOfExtras);

    // Get prices for total price
    let finalPrice :number = 0;

    finalPrice += randomProteinPrice;

    (randomExtras as Extras[]).forEach((item) => {
      finalPrice += item.cost;
    })

    setRandomOrder({
      price: finalPrice,
      meal: randomMeal,
      protein: randomProtein,
      bean: randomBean,
      rice: randomRice,
      salsa: randomSalsa,
      toppings: randomToppings as string[],
      extras: randomExtras  as Extras[],
    })
  }

  // Randomize the order on page load
  useEffect(() => {
    randomizeOrder();
  }, [])

  return (
    <div className="flex flex-col bg-slate-700 w-full h-screen items-center justify-center">
      <header className="">
        <h1>This is a header</h1>
      </header>
      <section>
        <article>
          <h1>Order</h1>
        </article>
        <article>
          <h1>{randomOrder?.meal}</h1>
          <h1>{randomOrder?.protein}</h1>
          <h1>{randomOrder?.bean}</h1>
          <h1>{randomOrder?.rice}</h1>
          <h1>{randomOrder?.salsa}</h1>
          <h1>-Toppings-</h1>
          {randomOrder?.toppings.map((topping) => {
            return <h2>{topping}</h2>
          })}
          <h1>-Extras-</h1>
          {randomOrder?.extras.map((extra) => {
            return <h2>{extra.name}</h2>
          })}
        </article>
      </section>
    </div>
  )
}

export default App
