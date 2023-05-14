import { createSlice } from '@reduxjs/toolkit';
import { Customer } from '../../../../types/customer';

type CustomerState = {
  customers: Customer[];
  isLoading: boolean;
};

const initialState: CustomerState = {
  customers: [],
  isLoading: false,
};

const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    getCustomersFetch: (state) => {
      state.isLoading = true;
    },
    getCustomersSuccess: (state, action) => {
      state.customers = action.payload;
      state.isLoading = false;
    },
    getCustomersFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getCustomersFetch, getCustomersSuccess, getCustomersFailure } =
  customersSlice.actions;

export default customersSlice.reducer;
