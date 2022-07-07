import { createSlice } from '@reduxjs/toolkit';
const initialUiState: {
  cartIsVisible: boolean;
  notification: { status: string; title: string; massage: string } | any;
} = {
  cartIsVisible: false,
  notification: null
};
const UiSlice = createSlice({
  name: 'ui',
  initialState: initialUiState,
  reducers: {
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message
      };
    }
  }
});

export const uiActions = UiSlice.actions;

export default UiSlice;
