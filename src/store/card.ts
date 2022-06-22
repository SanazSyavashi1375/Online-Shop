import { createSlice } from '@reduxjs/toolkit';
import product from '../models/product';

const initialCardState: {
  items: product[] | any;
  totalQuantity: number;
  totalItem: number;
  totalPrice: number;
} = {
  items: [],
  totalQuantity: 0,
  totalItem: 0,
  totalPrice: 0
};
const card = createSlice({
  name: 'card',
  initialState: initialCardState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item: product) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          description: newItem.description,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price
        });
        state.totalItem++;
        state.totalPrice = state.totalPrice + newItem.price;
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
        state.totalPrice = state.totalPrice + existingItem.price;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item: product) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item: product) => item.id !== id);
        state.totalPrice = state.totalPrice - existingItem.price;
        state.totalItem = state.totalItem - 1;
        if (state.totalItem === 0) {
          state.totalPrice = 0;
        }
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
        state.totalPrice = Math.floor(state.totalPrice - existingItem.price);
        if (state.totalItem === 0) {
          state.totalPrice = 0;
        }
      }
    },
    deleteItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item: product) => item.id === id);
      state.items = state.items.filter((item: product) => item.id !== id);
      state.totalPrice = state.totalPrice - existingItem.totalPrice;
      state.totalItem = state.totalItem - 1;
      if (state.totalItem === 0) {
        state.totalPrice = 0;
      }
    }
  }
});
export const cardAction = card.actions;
export default card;
