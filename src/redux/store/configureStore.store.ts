import { configureStore, combineReducers } from '@reduxjs/toolkit';
import borderReducer from '../reducers/borders.reducer';

const reducer = combineReducers({ borders: borderReducer });

const store = configureStore({ reducer });

export default store;
export type RootState = ReturnType<typeof reducer>;
