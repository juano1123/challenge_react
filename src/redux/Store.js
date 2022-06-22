import { configureStore } from '@reduxjs/toolkit'
import listsSlice from './listSlice'

export default configureStore({
  reducer: {
    list: listsSlice
  }
})