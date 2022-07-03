import { configureStore } from '@reduxjs/toolkit';
import getProductItemReducer from '../features/getProductItem/getProductItemSlice';
import getCategoriesSlice from '../features/getCategories/getCategoriesSlice';
import getProductsByCategoryReducer from '../features/getProductsByCategory/getProductsByCategorySlice';

export const store = configureStore({
  reducer: {
    productItem: getProductItemReducer,
    categories: getCategoriesSlice,
    productsByCategory: getProductsByCategoryReducer,
  },
});
