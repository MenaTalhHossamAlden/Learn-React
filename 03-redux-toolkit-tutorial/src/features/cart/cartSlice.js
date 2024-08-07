import { createSlice } from '@reduxjs/toolkit';
import cardItems from '../../cartItems';
const initialState = {
  cartItems: cardItems,
  amount: 4,
  total: 0,
  isLoading: true,
};
const cartSlice = createSlice({ name: 'cart', initialState });

console.log(cartSlice);

export default cartSlice.reducer;
