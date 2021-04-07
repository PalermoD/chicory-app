import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import {query} from './query';

const instance = axios.create({
  baseURL: 'http://prod-cart.chicoryapp.com',
});

const initialState = {
  retailers: [],
  status: 'idle',
  error: null
}

export const fetchRetailers = createAsyncThunk('retailers/fetchRetailers', async () => {
  const response = await instance.get(`/api/graph?query=${query}`)
  console.log(response.data.data.retailers, 'RESPONSE')
  return response.data.data.retailers
})

export const retailersSlice = createSlice({
  name: 'retailers',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchRetailers.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchRetailers.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.retailers = state.retailers.concat(action.payload)
    },
    [fetchRetailers.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    }
  }
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = retailersSlice.actions
export const selectAllRetailers = state => state.retailers.retailers
export default retailersSlice.reducer
