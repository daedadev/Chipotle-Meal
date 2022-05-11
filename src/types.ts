export type Proteins = {
  name: string;
  cost: number;
};

export type Extras = {
  name: string;
  cost: number;
};

export type Order = {
  price: number;
  meal: string;
  protein: string;
  bean: string;
  rice: string;
  salsa: string;
  toppings: string[];
  extras: Extras[];
};
