import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  position: {
    borderTopLeftRadius: number;
    borderTopRightRadius: number;
    borderBottomLeftRadius: number;
    borderBottomRightRadius: number;
  };
};

const initialState: initialStateType = {
  position: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
};

const borders = createSlice({
  initialState,
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
