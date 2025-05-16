import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct(state, action) {
            state.items = [...state.items, action.payload];
        },
        removeProduct(state, action) {
            const products = state.items.filter(item => {
                return item.id !== action.payload;
            });
            state.items = products;
        },
        clearProducts(state, action) {
            state.items = [];
        }
    },
});


export const { addProduct, removeProduct, clearProducts } = cartSlice.actions;

export default cartSlice.reducer;