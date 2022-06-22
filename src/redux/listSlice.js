import { createSlice } from '@reduxjs/toolkit'

export const listSlice = createSlice({
  name: 'list',
  initialState: {
    lists: [],
    list: [],
    list_stats: {}
  },
  reducers: {
    add: (state, action) => {
      state.lists = [...state.lists, action.payload]
    },
    list_detail: (state, action) => {
      state.list = action.payload;
    },
    list_stats: (state, action) => {
      state.list_stats = action.payload
    }
  }
})

export const { add, list_detail, list_stats } = listSlice.actions

export const getLists = (state) => state.list.lists
export const getList = (state) => state.list.list
export const getStats = (state) => state.list.list_stats

export default listSlice.reducer