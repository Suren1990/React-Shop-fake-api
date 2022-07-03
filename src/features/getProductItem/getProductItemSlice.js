import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const GET_PRODUCT_API = "https://fakestoreapi.com/products/";

const name = "getProductItem";

const initialState = {
  product: {},
  status: '',
};

export const getProductById = createAsyncThunk(
  `${name}/getProductById`,
  async (id) => {
    try {
      const response = await axios.get(GET_PRODUCT_API + id);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
)

const getProductItemSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.product = action.payload;
      })
      .addCase(getProductById.rejected, (state) => {
        state.status = 'error';
      })
  },
});

export const getProductItemStatus = (state) => state.productItem.status;
export const getProductItem = (state) => state.productItem.product;

export default getProductItemSlice.reducer;
