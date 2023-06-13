import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Account } from '../../../models/account';

const initialState = {
  login: '',
  email: '',
  isLogin: false,
} as Account;

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    addLoginUser(
      state,
      action: PayloadAction<{ login: string; email: string }>
    ) {
      const { login, email } = action.payload;
      return {
        ...state,
        login,
        email,
        isLogin: true,
      };
    },
  },
});

export const { addLoginUser } = accountSlice.actions;
export default accountSlice.reducer;
