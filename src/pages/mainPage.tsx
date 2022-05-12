import { useEffect, useState } from "react";
import type { Order, PricedItem, Item } from "../OrderItems.types";
import "./mainPage.css";
import {
  mealTypes,
  proteinTypes,
  beanTypes,
  riceTypes,
  salsaTypes,
  toppings,
  extras,
} from "../data.js";
import OrderItem from "../components/orderItem";

function App() {
  const [randomOrder, setRandomOrder] = useState<Order>();

  // Return random number in array length
  function getRandom(currentArray: Item[] | PricedItem[]) {
    return Math.floor(Math.random() * currentArray.length);
  }

  // Return an array consisting of a random number of random elements
  // Type check for possible Extras and string type
  function getMultipleRandom(
    currentArray: PricedItem[] | Item[],
    numberOfItems: number
  ) {
    let sortedArray: Item[] | PricedItem[] = [];

    // Check if there is only one item to be chosen, then only return getRandom()
    if (numberOfItems === 0) {
      sortedArray[0] = currentArray[getRandom(currentArray)];
      return sortedArray;
    }

    // If there is more than one item to be chosen shuffle array and then slice based on items needed to be returned
    sortedArray = currentArray.sort(() => 0.5 - Math.random());

    return sortedArray.slice(0, numberOfItems + 1);
  }

  // Get the random order components
  // Add the calorie costs
  // Add the prices
  function randomizeOrder() {
    let calorieCost = 0;

    let randomMeal: Item = mealTypes[getRandom(mealTypes)];
    calorieCost += randomMeal.calories;

    let proteinIndex = getRandom(proteinTypes);
    let randomProtein: PricedItem = proteinTypes[proteinIndex];
    let randomProteinPrice = proteinTypes[proteinIndex].cost;
    calorieCost += randomProtein.calories;

    let randomBean: Item = beanTypes[getRandom(beanTypes)];
    calorieCost += randomBean.calories;

    let randomRice: Item = riceTypes[getRandom(riceTypes)];
    calorieCost += randomRice.calories;

    let randomSalsa: Item = salsaTypes[getRandom(salsaTypes)];
    calorieCost += randomSalsa.calories;

    let amountOfToppings = getRandom(toppings);
    let randomToppings: Item[] = getMultipleRandom(toppings, amountOfToppings);
    calorieCost += getCalorieCount(randomToppings);

    let amountOfExtras = getRandom(extras);
    let randomExtras: Item[] | PricedItem[] = getMultipleRandom(
      extras,
      amountOfExtras
    );
    calorieCost += getCalorieCount(randomExtras);

    let finalPrice = 0;

    finalPrice += randomProteinPrice;

    // Set type to get cost/price pair
    (randomExtras as PricedItem[]).forEach((item) => {
      finalPrice += item.cost;
    });

    // Finalizing order
    setRandomOrder({
      price: finalPrice,
      meal: randomMeal,
      protein: randomProtein,
      bean: randomBean,
      rice: randomRice,
      salsa: randomSalsa,
      toppings: randomToppings as Item[],
      extras: randomExtras as PricedItem[],
      calories: calorieCost,
    });
    console.log(randomOrder);
  }

  // Take the item array and return the total calories
  function getCalorieCount(array: PricedItem[] | Item[]) {
    let calories = 0;

    array.forEach((item) => {
      calories += item.calories;
    });

    return calories;
  }

  // Randomize the order on page load
  useEffect(() => {
    randomizeOrder();
  }, []);

  if (randomOrder === undefined) {
    return <h1>lol</h1>;
  }

  return (
    <div className="flex flex-col bg-white w-full h-fit items-center">
      <header className="flex w-full h-24 items-center justify-between">
        <img className="w-20" src="Chipotle_Mexican_Grill_logo.png" />
        <h1 className="text-center">Random Chipotle Order</h1>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-center">Make Your Order A Reality</h1>
          <a
            className="text-center"
            href="https://chipotle.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            To Chipotle
          </a>
        </div>
      </header>
      <section className="flex flex-col w-full xl:w-[1280px] items-center justify-center">
        <article className="flex flex-col w-full items-center justify-center">
          <h1 className="text-3xl font-bold text-yellow-900">
            {randomOrder?.meal.name.toUpperCase()}
          </h1>
          <img src={randomOrder?.meal.image} />
        </article>
        <article className="w-[95%]">
          <section className="flex flex-col w-full justify-evenly">
            <article className="flex md:flex-row flex-col justify-between">
              <div className="flex flex-col md:w-[49%] w-full">
                <h1 className="text-3xl font-bold text-yellow-900">Protein</h1>
                <OrderItem item={randomOrder?.protein as Item} />
              </div>
              <div className="flex flex-col md:w-[49%] w-full">
                <h1 className="text-3xl font-bold text-yellow-900">-Beans-</h1>
                <OrderItem item={randomOrder?.bean as Item} />
              </div>
            </article>
            <article className="flex md:flex-row flex-col justify-between">
              <div className="flex flex-col md:w-[49%] w-full">
                <h1 className="text-3xl font-bold text-yellow-900">-Rice-</h1>
                <OrderItem item={randomOrder?.rice as Item} />
              </div>
              <div className="flex flex-col md:w-[49%] w-full">
                <h1 className="text-3xl font-bold text-yellow-900">-Salsa-</h1>
                <OrderItem item={randomOrder?.salsa as Item} />
              </div>
            </article>
          </section>
          <section className="flex flex-col w-full justify-evenly">
            <article className="flex md:flex-row flex-col justify-between">
              <div className="flex flex-col md:w-[49%] w-full">
                <h1 className="text-3xl font-bold text-yellow-900">
                  -Toppings-
                </h1>
                {randomOrder?.toppings.map((topping) => {
                  return <OrderItem item={topping as Item} />;
                })}
              </div>
              <div className="flex flex-col md:w-[49%] w-full">
                <h1 className="text-3xl font-bold text-yellow-900">-Extras-</h1>
                {randomOrder?.extras.map((extra) => {
                  return <OrderItem item={extra as Item} />;
                })}
              </div>
            </article>
          </section>
          <section className="flex w-full flex-row justify-evenly items-center">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-3xl font-bold text-yellow-900">Price</h1>
              <h2 className="text-3xl font-bold text-green-700">
                ${randomOrder?.price}
              </h2>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-3xl font-bold text-yellow-900">Calories</h1>
              <h2 className="text-3xl font-bold text-slate-900">
                {randomOrder?.calories}
              </h2>
            </div>
          </section>
        </article>
      </section>
      <footer className="sticky flex flex-row w-full bottom-0 h-36 items-center justify-evenly bg-slate-100 mt-10">
        <div>
          <h1 className="text-yellow-800 font-bold">Your Meal</h1>
          <h1>Click the button to randomize your order</h1>
        </div>
        <button className="w-52 text-xl text-white bg-yellow-800 border-2 hover:bg-yellow-700 p-3">
          Randomize Your Order
        </button>
      </footer>
    </div>
  );
}

export default App;
