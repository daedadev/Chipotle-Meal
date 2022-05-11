import { useEffect, useState } from 'react';
import { Order } from '../types';
import './mainPage.css';
import { mealTypes, proteinTypes, beanTypes, riceTypes, salsaTypes, toppings, extras } from "../data.js";

function App() {

  const [randomOrder, setRandomOrder] = useState<Order>()

  function randomizeOrder(){

  }

  useEffect(() => {

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
