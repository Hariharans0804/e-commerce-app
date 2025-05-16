import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../slices/cart';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
})




// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import cartReducer from '../slices/cart'

// const reducer = combineReducers({
//     cart: cartReducer,
// });

// export const store = configureStore({
//     reducer,
// })