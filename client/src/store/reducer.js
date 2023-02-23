import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  transaction: []
}

export const expenseSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    getTransactions: (state) => {

    }
  }
});

export const { getTransactions } = expenseSlice.actions;
export default expenseSlice.reducer;