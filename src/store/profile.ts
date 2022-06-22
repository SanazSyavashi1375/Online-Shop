import { createSlice } from '@reduxjs/toolkit';

const profile = createSlice({
  name: 'profile',
  initialState: {
    profileIsShown: false
  },
  reducers: {
    hideProfile(state) {
      state.profileIsShown = false;
    },
    showProfile(state) {
      state.profileIsShown = true;
    }
  }
});
export default profile;
export const profileAction = profile.actions;
