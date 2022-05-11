import { useEffect, useState } from 'react';
import type { Order, Proteins, Extras } from '../types';
import './mainPage.css';
import { mealTypes, proteinTypes, beanTypes, riceTypes, salsaTypes, toppings, extras } from "../data.js";

function App() {

  const [randomOrder, setRandomOrder] = useState<Order>()

  function getRandom(currentArray: string[] | Proteins[] | Extras[]){
    return Math.floor(Math.random() * currentArray.length)
  }

  function getMultipleRandom(currentArray: string[] | Extras[]){
    
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
    let amountOfToppings = getRandom(salsaTypes);


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

      </section>
    </div>
  )
}

export default App
