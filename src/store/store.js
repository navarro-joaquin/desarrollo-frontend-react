import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./features/counter/counterSlice";
import productReducer from "./features/product/productSlice";
import formReducer from "./features/form/formSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
    form: formReducer,
  },
})