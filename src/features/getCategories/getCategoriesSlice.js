import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const GET_CATEGORIES_API = "https://fakestoreapi.com/products/categories";

const name = "categories";

const initialState = {
  categories: [],
  status: '',
};

export const fetchAllCategories = createAsyncThunk(
  `${name}/fetchAllCategories`,
  async () => {
    try {
      const response = await axios.get(GET_CATEGORIES_API);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

const getCategoriesSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllCategories.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.categories = action.payload;
      })
      .addCase(fetchAllCategories.rejected, (state) => {
        state.status = 'error';
      })
  },
});

export const getCategoriesStatus = (state) => state.categories.status;
export const getCategories = (state) => state.categories.categories;

export default getCategoriesSlice.reducer;
