import { createSlice } from '@reduxjs/toolkit';
import product from '../models/product';
const initialproductState: {
  items: product[] | any;
  selectedItems: product[] | any;
  totalQuantity: number;
  searchedArr: product[] | any;
} = {
  items: [],
  selectedItems: [],
  searchedArr: [],
  totalQuantity: 0
};
const ProductSlice = createSlice({
  name: 'productSlice',
  initialState: initialproductState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
      state.selectedItems = state.items;
      state.searchedArr = state.selectedItems;
    },
    changeCartWithCategory(state, action) {
      const selectCategory = action.payload;
      if (selectCategory === 'none') {
        state.selectedItems = state.items;
        state.searchedArr = state.selectedItems;
      } else if (selectCategory === 'electronics') {
        state.selectedItems = state.items.filter(
          (item: product) => item.category === 'electronics'
        );
        state.searchedArr = state.selectedItems;
      } else if (selectCategory === 'jewelery') {
        state.selectedItems = state.items.filter((item: product) => item.category === 'jewelery');
        state.searchedArr = state.selectedItems;
      } else if (selectCategory === "men's clothing") {
        state.selectedItems = state.items.filter(
          (item: product) => item.category === "men's clothing"
        );
        state.searchedArr = state.selectedItems;
      } else if (selectCategory === "women's clothing") {
        state.selectedItems = state.items.filter(
          (item: product) => item.category === "women's clothing"
        );
        state.searchedArr = state.selectedItems;
      } else {
        state.selectedItems = state.items;
        state.searchedArr = state.selectedItems;
      }
    },
    searchProduct(state, action) {
      const searchedTitle = action.payload;
      if (searchedTitle === '') {
        state.searchedArr = state.selectedItems;
      } else {
        state.searchedArr = state.selectedItems.filter((item: product) =>
          item.title.toLowerCase().includes(searchedTitle.toLowerCase())
        );
      }
    }
  }
});

export const productActions = ProductSlice.actions;

export default ProductSlice;
