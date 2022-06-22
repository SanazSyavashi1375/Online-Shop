import { configureStore } from '@reduxjs/toolkit';
import card from './card';
import profile from './profile';
import uiSlice from './ui-slice';
import productSlice from './productSlice';
import userSlice from './user';
import section from './selectPart';

const store = configureStore({
  reducer: {
    profile: profile.reducer,
    card: card.reducer,
    ui: uiSlice.reducer,
    productSlice: productSlice.reducer,
    user: userSlice.reducer,
    select: section.reducer
  }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
