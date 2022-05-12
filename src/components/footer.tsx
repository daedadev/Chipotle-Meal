import React from "react";
import LoadingIcon from "./loadingIcon";

interface FooterProps {
  ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  loading: boolean;
}

export default function Footer(
  randomizeFunction: FooterProps,
  loading: boolean
) {
  return (
    <footer className="sticky flex md:flex-row flex-col w-full bottom-0 md:h-36 h-28 items-center justify-evenly bg-slate-50 mt-10">
      <div className="md:flex flex-col hidden">
        <h1 className="text-yellow-800 font-bold">Your Meal</h1>
        <h1>Click the button to randomize your order</h1>
      </div>
      <button
        onClick={randomizeFunction.ClickHandler}
        className="md:w-64 md:h-20 w-full h-full text-xl text-white bg-yellow-800 border-2 hover:bg-yellow-700 p-3"
      >
        Randomize Your Order
      </button>
    </footer>
  );
}
