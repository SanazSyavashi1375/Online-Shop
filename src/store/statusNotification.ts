import { createSlice } from '@reduxjs/toolkit';
import { memo } from 'react';
const initialUiState: {
  statusIsShown: boolean;
  title: string | any;
} = {
  statusIsShown: false,
  title: null
};
const Status = createSlice({
  name: 'Status',
  initialState: initialUiState,
  reducers: {
    showNotification(state, action) {
      state.statusIsShown = true;
      state.title = action.payload;
    },
    hideNotification(state) {
      state.statusIsShown = false;
    }
  }
});

export const StatusAction = Status.actions;

export default Status;
