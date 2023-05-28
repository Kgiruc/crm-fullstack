import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import Account from '../../../models/Account';

const initialState = {
  login: '',
  email: '',
  isLogin: false,
} as Account;

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    addLogin(state, action: PayloadAction<string>) {
      return { ...state, login: action.payload, isLogin: true };
    },
  },
});

export const { addLogin } = accountSlice.actions;
export default accountSlice.reducer;
