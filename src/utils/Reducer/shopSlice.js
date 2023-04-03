import { createSlice } from "@reduxjs/toolkit"

export const shopSlice = createSlice({
  name: "mycoolshop",
  initialState: {
    products: [],
    features:[],
    cart:[]
  },
  reducers: {
    products: (state, action) => {
      state.products = action.payload
    },
    features: (state, action) => {
      state.features = action.payload
    },
    cart: (state,action) => {
      state.cart.push(action.payload)
    },
  },
})

export const {products ,features,cart} = shopSlice.actions

export default shopSlice.reducer
