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
  totalPrice: parseInt(JSON.parse(localStorage.getItem('totalPrice') || '0'))
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
          totalPrice: Number(newItem.price.toFixed(2))
        });
        state.totalItem++;
        state.totalPrice = state.totalPrice + newItem.price;
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = Number((existingItem.totalPrice + newItem.price).toFixed(2));
        state.totalPrice = state.totalPrice + existingItem.price;
        state.totalItem++;
      }
      localStorage.setItem('shopCardItem', JSON.stringify(state.items));
      localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
      localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));
    },
    removeItem(state, action) {
      const input = localStorage.getItem('shopCardItem') || '[]'.trim();
      state.items = JSON.parse(input);
      const id = action.payload;
      const existingItem = state.items.find((item: product) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item: product) => item.id !== id);
        state.totalPrice = state.totalPrice - existingItem.price;
        localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));
        state.totalItem = state.totalItem - 1;
        state.totalQuantity--;
        if (state.totalPrice < 3) {
          state.totalPrice = 0;
          localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));
        }
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = Number((existingItem.totalPrice - existingItem.price).toFixed(2));
        state.totalPrice = state.totalPrice - existingItem.price;
        localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));
        state.totalQuantity--;
        if (state.totalPrice < 3) {
          state.totalPrice = 0;
          localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));
        }
      }
      localStorage.setItem('shopCardItem', JSON.stringify(state.items));
      localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
      localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));
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
        localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));
      }
      localStorage.setItem('shopCardItem', JSON.stringify(state.items));
      localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
      localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));
    }
  }
});
export const cardAction = Card.actions;
export default Card;
