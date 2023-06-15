import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DetailsInv } from '../../../models/details';
import { Invoice } from '../../../models/invoice';

const initialState = {
  invoice: {} as Invoice,
  isOpen: false,
} as DetailsInv;

const detailsInvSlice = createSlice({
  name: 'detailsInv',
  initialState,
  reducers: {
    detailsInvoice(state, action: PayloadAction<{ invoice: Invoice }>) {
      const { invoice } = action.payload;
      return {
        ...state,
        invoice,
        isOpen: !state.isOpen,
      };
    },
  },
});

export const { detailsInvoice } = detailsInvSlice.actions;
export default detailsInvSlice.reducer;
