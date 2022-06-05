import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { contactFilter } from './actions'

const filterReducer = createReducer('', {
    [contactFilter]: (state, action) => action.payload,
});

export default combineReducers({ filter: filterReducer });
