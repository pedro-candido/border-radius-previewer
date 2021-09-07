import { createSlice } from "@reduxjs/toolkit";

const borders = createSlice({
  initialState: {
    position: {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
  },
  name: "borders",
  reducers: {
    modifyLeftTop(state, { payload }) {
      state.position.borderTopLeftRadius = payload;
    },
    modifyRightTop(state, { payload }) {
      state.position.borderTopRightRadius = payload;
    },
    modifyLeftBottom(state, { payload }) {
      state.position.borderBottomLeftRadius = payload;
    },
    modifyRightBottom(state, { payload }) {
      state.position.borderBottomRightRadius = payload;
    },
  },
});

const borderReducer = borders.reducer;

export const {
  modifyLeftBottom,
  modifyLeftTop,
  modifyRightBottom,
  modifyRightTop,
} = borders.actions;
export default borderReducer;
