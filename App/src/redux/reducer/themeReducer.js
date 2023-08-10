import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'theme',
  initialState:  {
    sidebarShow: true,
  },
  reducers: {
    set: (state, action) => {
        return { 
          ...state,
          sidebarShow: action.payload
        }
    },
  },
})

export const { set } = themeSlice.actions