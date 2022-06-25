import { createSlice } from '@reduxjs/toolkit';

const Section = createSlice({
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
export const sectionActions = Section.actions;
export default Section;
