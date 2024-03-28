import { configureStore } from '@reduxjs/toolkit'
import products from '../features/products/productsSlise'

export const store = configureStore({
  reducer: {
    products
  },
})