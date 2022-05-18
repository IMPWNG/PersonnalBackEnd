import { combineReducers } from 'redux';

import auth from "./auth.store";

export const store = combineReducers({ auth });