import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger'
import reducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 

export const store = createStore(
	reducer,
	composeEnhancers(
		applyMiddleware(logger)
	)
)