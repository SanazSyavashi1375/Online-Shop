import { createSlice } from '@reduxjs/toolkit';

const section = createSlice({
  name: 'section',
  initialState: {
    selected: 'none'
  },
  reducers: {
    setSelected(state, action) {
      state.selected = action.payload;
    }
  }
});
export const sectionActions = section.actions;
export default section;
