import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IPizzaState {
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

interface IBasket {
  Basket: IPizzaState[]
  TotalSum: number
  TotalPizza: number
}

const initialState: IBasket = {
  Basket: [],
  TotalSum: 0,
  TotalPizza: 0
}

export const BasketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<IPizzaState>) => {
      const findPizza = state.Basket.find((obj) => obj.id === action.payload.id);
      const findSize = state.Basket.find((obj) => obj.size === action.payload.size);
      const findType = state.Basket.find((obj) => obj.type === action.payload.type);

      if (findPizza && findSize && findType) {
        findPizza.count++;
        findPizza.pizzaPrice += findPizza.price
        state.TotalPizza++
        state.TotalSum += findPizza.price
      }
      else {
        state.Basket.push(action.payload)
        state.TotalPizza += 1
        state.TotalSum += action.payload.price
      }
    },
    clearBasket: (state) => {
      state.TotalPizza = 0,
        state.TotalSum = 0,
        state.Basket = []
    },
    removePizza: (state, action: PayloadAction<{ globalId: string, size: number, type: number }>) => {
      const findItem = state.Basket.find((obj) => obj.globalId === action.payload.globalId);
      if (findItem) {
        state.Basket = state.Basket.filter((item) => item.globalId !== findItem.globalId)
        state.TotalSum -= findItem.pizzaPrice
        state.TotalPizza -= findItem.count

      }
    },
    incrementPizza: (state, action: PayloadAction<{ globalId: string }>) => {
      const findPizza = state.Basket.find((obj) => obj.globalId === action.payload.globalId)
      if (findPizza) {
        findPizza.count++;
        state.TotalPizza++
        findPizza.pizzaPrice += findPizza.price
        state.TotalSum += findPizza.price
      }
    },
    decrementPizzaByOne: (state, action: PayloadAction<{ globalId: string }>) => {
      const findPizza = state.Basket.find((obj) => obj.globalId === action.payload.globalId)
      if (findPizza && findPizza.count > 1) {
        findPizza.count--;
        state.TotalPizza--
        findPizza.pizzaPrice -= findPizza.price
        state.TotalSum -= findPizza.price
      }
    }
  }
})


export const { addToBasket, clearBasket, removePizza, incrementPizza, decrementPizzaByOne } = BasketSlice.actions
export default BasketSlice.reducer