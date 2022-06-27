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
      state.user1 = action.payload;
    }
  }
});

export const userActions = UserSlice.actions;
export default UserSlice;
