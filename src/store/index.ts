import { configureStore } from '@reduxjs/toolkit';
import Card from './card';
import Profile from './profile';
import UiSlice from './ui-slice';
import ProductSlice from './productSlice';
import UserSlice from './user';
import Section from './selectPart';
import Status from './statusNotification';

const store = configureStore({
  reducer: {
    profile: Profile.reducer,
    card: Card.reducer,
    ui: UiSlice.reducer,
    productSlice: ProductSlice.reducer,
    user: UserSlice.reducer,
    select: Section.reducer,
    status: Status.reducer
  }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
