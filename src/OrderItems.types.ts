export type Item = {
  name: string;
  image: string;
  calories: number;
};

export type PricedItem = {
  name: string;
  cost: number;
  image: string;
  calories: number;
};

export type Order = {
  price: number;
  meal: Item;
  protein: PricedItem;
  bean: Item;
  rice: Item;
  salsa: Item;
  toppings: Item[];
  extras: PricedItem[];
  calories: number;
};
