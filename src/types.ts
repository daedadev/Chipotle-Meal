export type Items = {
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
  meal: Items;
  protein: PricedItem;
  bean: Items;
  rice: Items;
  salsa: Items;
  toppings: Items[];
  extras: PricedItem[];
};
