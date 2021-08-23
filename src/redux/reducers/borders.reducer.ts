import { createSlice } from '@reduxjs/toolkit';

const borders = createSlice({
  initialState: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  name: 'borders',
  reducers: {
    modifyLeftTop(state, { payload }) {
      state.borderTopLeftRadius = payload;
    },
    modifyRightTop(state, { payload }) {
      state.borderTopRightRadius = payload;
    },
    modifyLeftBottom(state, { payload }) {
      state.borderBottomLeftRadius = payload;
    },
    modifyRightBottom(state, { payload }) {
      state.borderBottomRightRadius = payload;
    },
  },
});

const borderReducer = borders.reducer;

export const {
  modifyLeftBottom, modifyLeftTop, modifyRightBottom, modifyRightTop,
} = borders.actions;
export default borderReducer;
