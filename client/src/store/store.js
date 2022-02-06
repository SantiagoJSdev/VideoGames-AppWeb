import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import { errorReducer } from '../reducer/errorReducer';
import {gameReducer} from '../reducer/gameReducer'


const reducer = combineReducers({
    game: gameReducer, 
    error: errorReducer})
    
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    reducer, 
    composeEnhancers(applyMiddleware(thunk))
)