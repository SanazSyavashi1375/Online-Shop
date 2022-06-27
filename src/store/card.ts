import { createSlice } from '@reduxjs/toolkit';
import product from '../models/product';

const initialCardState: {
  items: product[] | any;
  totalQuantity: number;
  totalItem: number;
  totalPrice: number;
} = {
  items: [],
  totalQuantity: parseInt(JSON.parse(localStorage.getItem('totalQuantity') || '0')),
  totalItem: 0,
  totalPrice: 0
};
const Card = createSlice({
  name: 'card',
  initialState: initialCardState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const input = localStorage.getItem('shopCardItem') || '[]'.trim();
      state.items = JSON.parse(input);
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
        state.totalItem++;
      }
      localStorage.setItem('shopCardItem', JSON.stringify(state.items));
      localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
    },
    removeItem(state, action) {
      const input = localStorage.getItem('shopCardItem') || '[]'.trim();
      state.items = JSON.parse(input);
      const id = action.payload;
      const existingItem = state.items.find((item: product) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item: product) => item.id !== id);
        state.totalPrice = state.totalPrice - existingItem.price;
        state.totalItem = state.totalItem - 1;
        state.totalQuantity--;
        if (state.totalItem === 0) {
          state.totalPrice = 0;
        }
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
        state.totalPrice = Math.floor(state.totalPrice - existingItem.price);
        state.totalQuantity--;
        if (state.totalItem === 0) {
          state.totalPrice = 0;
        }
      }
      localStorage.setItem('shopCardItem', JSON.stringify(state.items));
      localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
    },
    deleteItem(state, action) {
      const input = localStorage.getItem('shopCardItem') || '[]'.trim();
      state.items = JSON.parse(input);
      const id = action.payload;
      const existingItem = state.items.find((item: product) => item.id === id);
      state.items = state.items.filter((item: product) => item.id !== id);
      state.totalPrice = state.totalPrice - existingItem.totalPrice;
      state.totalItem = state.totalItem - existingItem.quantity;
      state.totalQuantity = state.totalQuantity - existingItem.quantity;
      if (state.totalItem === 0) {
        state.totalPrice = 0;
      }
      localStorage.setItem('shopCardItem', JSON.stringify(state.items));
      localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
    }
  }
});
export const cardAction = Card.actions;
export default Card;
