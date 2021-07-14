import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import app from './reducers/app'

const rootReducer = combineReducers({
	app: app,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
