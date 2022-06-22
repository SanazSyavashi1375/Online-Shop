import { createSlice } from '@reduxjs/toolkit';
import user from '../models/user';
const initialUserState: { user1: user | any } = {
  user1: {}
};
const userSlice = createSlice({
  name: 'userSlice',
  initialState: initialUserState,
  reducers: {
    setUser(state, action) {
      state.user1 = action.payload;
    }
  }
});

export const userActions = userSlice.actions;
export default userSlice;
