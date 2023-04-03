import { configureStore } from "@reduxjs/toolkit"
import shopReducer from "./Reducer/shopSlice"

export default configureStore({
  reducer: {
    shop: shopReducer,
  },
})
