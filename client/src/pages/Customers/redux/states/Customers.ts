import { PayloadAction, createSlice } from '@reduxjs/toolkit';
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
      return { ...state, isLoading: true };
    },
    getCustomersSuccess: (state, action: PayloadAction<Customer[]>) => {
      return { ...state, customers: action.payload, isLoading: false };
    },
    getCustomersFailure: (state) => {
      return { ...state, isLoading: false };
    },
  },
});

export const { getCustomersFetch, getCustomersSuccess, getCustomersFailure } =
  customersSlice.actions;

export default customersSlice.reducer;
