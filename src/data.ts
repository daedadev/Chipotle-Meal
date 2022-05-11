import { Proteins, Extras } from "./types";

export const mealTypes: string[] = ["burrito", "bowl", "tacos"];

export const proteinTypes: Proteins[] = [
  {
    name: "chicken",
    cost: 8.6,
  },
  {
    name: "steak",
    cost: 10.2,
  },
  {
    name: "barbacoa",
    cost: 10.2,
  },
  {
    name: "carnitas",
    cost: 9.25,
  },
  {
    name: "veggie",
    cost: 8.6,
  },
  {
    name: "sofritas",
    cost: 8.6,
  },
];

export const beanTypes: string[] = ["black", "pinto"];

export const riceTypes: string[] = [
  "white rice",
  "brown rice",
  "cauliflower rice",
];

export const salsaTypes: string[] = [
  "tomato",
  "tomatillo-green chili",
  "tomatillo-red chili",
  "vinagrette",
];

export const toppings: string[] = [
  "sour cream",
  "corn",
  "fajita veggies",
  "romaine lettuce",
  "cheese",
];

export const extras: Extras[] = [
  {
    name: "guac",
    cost: 2.6,
  },
  {
    name: "queso",
    cost: 1.65,
  },
];
