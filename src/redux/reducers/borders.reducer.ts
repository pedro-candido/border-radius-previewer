import { createSlice } from '@reduxjs/toolkit';

const borders = createSlice({
    initialState: {
        leftTop: 0,
        rightTop: 0,
        leftBottom: 0,
        rightBottom: 0
    },
    name: 'borders',
    reducers: {
        modifyLeftTop(state, { payload }){
            state.leftTop = payload
        },
        modifyRightTop(state, { payload }){
            state.rightTop = payload
        },
        modifyLeftBottom(state, { payload }){
            state.leftBottom = payload
        },
        modifyRightBottom(state, { payload }){
            state.rightBottom = payload
        },
    }
})

export const { modifyLeftBottom, modifyLeftTop, modifyRightBottom, modifyRightTop } = borders.actions
export default borders.reducer