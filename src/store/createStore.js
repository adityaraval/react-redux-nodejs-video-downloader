import {createStore,applyMiddleware} from 'redux';
import { combineReducers } from 'redux';

import reduxPromise from 'redux-promise';
import reduxThunk from 'redux-thunk';

import videoReducer from '../reducers/videoReducer';

const rootReducer = combineReducers({
  video:videoReducer
});

const store = createStore(rootReducer,applyMiddleware(reduxThunk,reduxPromise));

export default store;
