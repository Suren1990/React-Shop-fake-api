import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = 'https://fakestoreapi.com/products/';

const name = 'getProductByCategory';

const initialState = {
    productsByCategory: [],
    status: '',
    productDeletedStatus: '',
}

export const fetchProductsByCategory = createAsyncThunk(
    `${name}/fetchProductsByCategory`,
    async (category) => {
        try {
            const resonse = await axios.get(API + category);
            return resonse.data;
        } catch (err) {
            return err.message;
        }
    }
)

export const deleteProduct = createAsyncThunk(
    `${name}/deleteProduct`,
    async (id) => {
        try {
            const response = await axios.delete(API + id);
            return response?.data;
        } catch (err) {
            return err.message;
        }
    }
);

const getProductsByCategorySlice = createSlice({
    name,
    initialState,
    reducers: {
        removeProduct (state, action) {
            state.productsByCategory = state.productsByCategory.filter((product) => product.id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsByCategory.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
                state.status = 'loaded';
                state.productsByCategory = action.payload;
            })
            .addCase(fetchProductsByCategory.rejected, (state) => {
                state.status = 'error';
            })
            .addCase(deleteProduct.pending, (state) => {
                state.productDeletedStatus = 'loading';
            })
            .addCase(deleteProduct.fulfilled, (state) => {
                state.productDeletedStatus = 'deleted';
            })
            .addCase(deleteProduct.rejected, (state) => {
                state.productDeletedStatus = 'error';
            });
    }
})

export const productsByCategoryData = (state) => state.productsByCategory.productsByCategory;
export const productsByCategoryStatus = (state) => state.productsByCategory.status;
export const productDeletedStatus = (state) => state.productsByCategory.productDeletedStatus;

export const { removeProduct } = getProductsByCategorySlice.actions;

export default getProductsByCategorySlice.reducer; 
