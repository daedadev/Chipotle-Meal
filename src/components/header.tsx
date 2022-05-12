import React from "react";

export default function Header() {
  return (
    <header className="flex bg-slate-50 sticky top-0 md:flex-row flex-col w-full md:h-24 h-fit items-center md:justify-between justify-evenly pb-5 pt-5">
      <div className="flex flex-row items-center justify-center">
        <img
          className="w-20 md:ml-10 ml-2"
          src="Chipotle_Mexican_Grill_logo.png"
        />
        <h1 className="ml-5 font-bold text-2xl text-slate-700 text-center">
          RANDOM MEAL GENERATOR
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center md:mr-10">
        <h1 className="text-center text-slate-700 text-lg">
          Make Your Order A Reality
        </h1>
        <a
          className="text-center text-yellow-900 font-bold text-xl"
          href="https://chipotle.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          To Chipotle
        </a>
      </div>
    </header>
  );
}
