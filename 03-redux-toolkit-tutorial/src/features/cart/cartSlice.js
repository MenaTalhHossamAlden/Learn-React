import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import cartItems from '../../cartItems';
import { openModal } from '../modal/modalSlice';
const url = 'http://course-api.com/react-useReducer-cart-project';
const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: false,
};
export const getCartItems = createAsyncThunk(
  'cart/getCartItems',
  async (name, thunkAPI) => {
    try {
      // console.log(name);
      // console.log(thunkAPI.getState());
      // console.log(thunkAPI.dispatch(openModal()));
      const resp = await axios(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      state.cartItems.find((item) => item.id === payload).amount++;
    },
    decrease: (state, { payload }) => {
      state.cartItems.find((item) => item.id === payload).amount--;
    },
    calculateTotals: (state) => {
      let total = 0;
      let amount = 0;
      state.cartItems.forEach((item) => {
        total += item.price * item.amount;
        amount += item.amount;
      });
      state.total = total.toFixed(2);
      state.amount = amount;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cardItems = action.payload;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
      });
  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
