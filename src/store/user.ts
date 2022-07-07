import { createSlice } from '@reduxjs/toolkit';
import User from '../models/user';
const initialUserState: { user1: User | any } = {
  user1: {}
};
const UserSlice = createSlice({
  name: 'userSlice',
  initialState: initialUserState,
  reducers: {
    setUser(state, action) {
      localStorage.setItem('user', JSON.stringify(action.payload));
      const user = JSON.parse(localStorage.getItem('user') || '{}'.trim());
      state.user1 = user;
    }
  }
});

export const userActions = UserSlice.actions;
export default UserSlice;
