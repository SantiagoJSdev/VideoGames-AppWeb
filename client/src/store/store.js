import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import {gameReducer} from '../reducer/gameReducer'



const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    gameReducer, 
    composeEnhancers(applyMiddleware(thunk))
)