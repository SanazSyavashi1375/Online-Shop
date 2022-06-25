import { createSlice } from '@reduxjs/toolkit';

const Profile = createSlice({
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
export default Profile;
export const profileAction = Profile.actions;
