export interface IBasket {
  Basket: IPizzaState[]
  TotalSum: number
  TotalPizza: number
}

export interface IPizzaState {
  globalId: string;
  id: string;
  imageUrl: string | null;
  title: string;
  type: number;
  size: number;
  price: number;
  category: number;
  count: number;
  pizzaPrice: number;
}