import { PricedItem, Item } from "./Meal.types";

export const mealTypes: Item[] = [
  { name: "burrito", image: "burrito.png", calories: 0 },
  { name: "bowl", image: "bowl.jpg", calories: 0 },
  { name: "tacos", image: "tacos.jpg", calories: 220 },
];

export const proteinTypes: PricedItem[] = [
  {
    name: "chicken",
    cost: 8.4,
    image: "chicken.png",
    calories: 180,
  },
  {
    name: "steak",
    cost: 10.0,
    image: "steak.png",
    calories: 150,
  },
  {
    name: "barbacoa",
    cost: 10.0,
    image: "barbacoa.png",
    calories: 170,
  },
  {
    name: "carnitas",
    cost: 9.05,
    image: "carnitas.png",
    calories: 210,
  },
  {
    name: "veggie",
    cost: 8.4,
    image: "veggie.png",
    calories: 0,
  },
  {
    name: "sofritas",
    cost: 8.4,
    image: "sofritas.png",
    calories: 150,
  },
];

export const beanTypes: Item[] = [
  { name: "black", image: "black-beans.png", calories: 130 },
  { name: "pinto", image: "pinto-beans.png", calories: 130 },
];

export const riceTypes: Item[] = [
  { name: "white rice", image: "white-rice.png", calories: 210 },
  { name: "brown rice", image: "brown-rice.png", calories: 210 },
  { name: "cauliflower rice", image: "cauliflower-rice.png", calories: 210 },
];

export const salsaTypes: Item[] = [
  { name: "tomato", image: "tomato.png", calories: 25 },
  { name: "tomatillo-green chili", image: "green-chili.png", calories: 15 },
  { name: "tomatillo-red chili", image: "red-chili.png", calories: 30 },
  { name: "vinagrette", image: "vinagrette.png", calories: 220 },
];

export const toppings: Item[] = [
  { name: "sour cream", image: "sour-cream.png", calories: 110 },
  { name: "corn", image: "corn.png", calories: 80 },
  { name: "fajita veggies", image: "fajita-veggies.png", calories: 20 },
  { name: "romaine lettuce", image: "romaine-lettuce.png", calories: 5 },
  { name: "cheese", image: "cheese.png", calories: 110 },
];

export const extras: PricedItem[] = [
  {
    name: "guac",
    cost: 2.6,
    image: "guac.png",
    calories: 230,
  },
  {
    name: "queso",
    cost: 1.5,
    image: "queso.png",
    calories: 120,
  },
];
