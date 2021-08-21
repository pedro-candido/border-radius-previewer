import { configureStore, combineReducers } from '@reduxjs/toolkit'
import BorderReducer from '../reducers/borders.reducer'

const reducer = combineReducers({borders: BorderReducer})

const store = configureStore({reducer})

export default store