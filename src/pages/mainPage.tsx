import { useEffect, useState } from "react";
import type { Order, PricedItem, Item } from "../Food.types";
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
import Footer from "../components/footer";
import Header from "../components/header";
import LoadingIcon from "../components/loadingIcon";

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

    let price = 0;

    price += randomProteinPrice;

    // Set type to get cost/price pair
    (randomExtras as PricedItem[]).forEach((item) => {
      price += item.cost;
    });

    // Ensure final price contains leading zeros
    let finalPrice = price.toFixed(2);

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
    return (
      <>
        <Header />
        <div className="flex flex-col bg-white w-full min-h-screen items-center justify-center">
          <LoadingIcon />
        </div>
        <Footer ClickHandler={randomizeOrder} loading={true} />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="flex flex-col bg-white w-full min-h-screen items-center">
        <section className="flex flex-col w-full xl:w-[1280px] items-center justify-center">
          <article className="flex flex-col w-full items-center justify-center mt-5">
            <h1 className="w-[95%] text-3xl font-bold text-yellow-900 text-left">
              {randomOrder?.meal.name.toUpperCase()}
            </h1>
            <img
              alt={`Picture of the food item ${randomOrder?.meal.name} from Chipotle`}
              src={randomOrder?.meal.image}
            />
          </article>
          <article className="w-[95%]">
            <section className="flex flex-col w-full justify-evenly">
              <article className="flex md:flex-row flex-col justify-between">
                <div className="flex flex-col md:w-[49%] w-full">
                  <h1 className="text-3xl font-bold text-yellow-900">
                    PROTEIN
                  </h1>
                  <OrderItem item={randomOrder?.protein as Item} />
                </div>
                <div className="flex flex-col md:w-[49%] w-full">
                  <h1 className="text-3xl font-bold text-yellow-900">BEANS</h1>
                  <OrderItem item={randomOrder?.bean as Item} />
                </div>
              </article>
              <article className="flex md:flex-row flex-col justify-between">
                <div className="flex flex-col md:w-[49%] w-full">
                  <h1 className="text-3xl font-bold text-yellow-900">RICE</h1>
                  <OrderItem item={randomOrder?.rice as Item} />
                </div>
                <div className="flex flex-col md:w-[49%] w-full">
                  <h1 className="text-3xl font-bold text-yellow-900">SALSA</h1>
                  <OrderItem item={randomOrder?.salsa as Item} />
                </div>
              </article>
            </section>
            <section className="flex flex-col w-full justify-evenly">
              <article className="flex md:flex-row flex-col justify-between">
                <div className="flex flex-col md:w-[49%] w-full">
                  <h1 className="text-3xl font-bold text-yellow-900">
                    TOPPINGS
                  </h1>
                  {randomOrder?.toppings.map((topping, index) => {
                    return <OrderItem key={index} item={topping as Item} />;
                  })}
                </div>
                <div className="flex flex-col md:w-[49%] w-full">
                  <h1 className="text-3xl font-bold text-yellow-900">EXTRAS</h1>
                  {randomOrder?.extras.map((extra, index) => {
                    return <OrderItem key={index} item={extra as Item} />;
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
      </div>
      <Footer ClickHandler={randomizeOrder} loading={false} />
    </>
  );
}

export default App;
