import { useEffect, useState } from 'react';
import type { Order, PricedItem, Items } from '../types';
import './mainPage.css';
import { mealTypes, proteinTypes, beanTypes, riceTypes, salsaTypes, toppings, extras } from "../data.js";

function App() {

  const [randomOrder, setRandomOrder] = useState<Order>()

  // Return random number in array length
  function getRandom(currentArray: Items[] | PricedItem[]){
    return Math.floor(Math.random() * currentArray.length)
  }

  // Return an array consisting of a random number of random elements
  // Type check for possible Extras and string type
  function getMultipleRandom(currentArray: PricedItem[] | Items[], numberOfItems: number){
    let sortedArray: Items[] | PricedItem[] = []

    // Check if there is only one item to be chosen, then only return getRandom()
    if(numberOfItems === 0){
      sortedArray[0] = currentArray[getRandom(currentArray)];
      return sortedArray;
    }

    // If there is more than one item to be chosen shuffle array and then slice based on items needed to be returned
    sortedArray = currentArray.sort(() => 0.5 - Math.random())

    return sortedArray.slice(0, numberOfItems+1);

  }

  // Get the random order components
  function randomizeOrder(){

    let randomMeal :Items = mealTypes[getRandom(mealTypes)];

    let proteinIndex = getRandom(proteinTypes);
    let randomProtein = proteinTypes[proteinIndex];
    let randomProteinPrice = proteinTypes[proteinIndex].cost;

    let randomBean = beanTypes[getRandom(beanTypes)];
    let randomRice = riceTypes[getRandom(riceTypes)];

    let randomSalsa = salsaTypes[getRandom(salsaTypes)];

    let amountOfToppings = getRandom(toppings);
    let randomToppings = getMultipleRandom(toppings, amountOfToppings);

    let amountOfExtras = getRandom(extras);
    let randomExtras = getMultipleRandom(extras, amountOfExtras);

    let finalPrice = 0;

    finalPrice += randomProteinPrice;

    // Set type to get cost/price pair
    (randomExtras as PricedItem[]).forEach((item) => {
      finalPrice += item.cost;
    })

    // Finalizing order
    setRandomOrder({
      price: finalPrice,
      meal: randomMeal,
      protein: randomProtein,
      bean: randomBean,
      rice: randomRice,
      salsa: randomSalsa,
      toppings: randomToppings as Items[],
      extras: randomExtras  as PricedItem[],
    })
  }

  // Randomize the order on page load
  useEffect(() => {
    randomizeOrder();
  }, [])

  return (
    <div className="flex flex-col bg-slate-100 w-full h-screen items-center">
      <header className="flex w-full h-24 items-center justify-between">
        <img className='w-20' src='Chipotle_Mexican_Grill_logo.png'/>
        <h1 className='text-center'>Random Chipotle Order</h1>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-center'>Make Your Order A Reality</h1>
          <a className='text-center' href='https://chipotle.com' target="_blank" rel="noopener noreferrer">To Chipotle</a>
        </div>
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
