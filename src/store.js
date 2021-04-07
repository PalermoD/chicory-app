import { configureStore } from '@reduxjs/toolkit'
import retailersReducer from './features/retailers/retailersSlice'

export default configureStore({
  reducer: {
    retailers : retailersReducer
  },
})
