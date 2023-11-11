import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Account } from '../../../models/Account';

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
    resetProfileInfo() {
      return initialState;
    },
  },
});

export const { addLoginUser, resetProfileInfo } = accountSlice.actions;
export default accountSlice.reducer;
