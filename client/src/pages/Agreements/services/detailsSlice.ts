import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Details } from '../../../models/details';
import { Agreement } from '../../../models/agreement';

const initialState = {
  agreement: {} as Agreement,
  isOpen: false,
} as Details;

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    detailsAgreement(state, action: PayloadAction<{ agreement: Agreement }>) {
      const { agreement } = action.payload;
      return {
        ...state,
        agreement,
        isOpen: !state.isOpen,
      };
    },
  },
});

export const { detailsAgreement } = detailsSlice.actions;
export default detailsSlice.reducer;
