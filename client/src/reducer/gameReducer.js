// state = {
//     dataGame: []
// }

import { types } from "../types/types";

export const gameReducer = (state = {}, action) => {
  
    switch (action.type) {

        case types.GETDATA:
            return {
                ...state,
                dataGame: action.payload
            }
        
        
    
        default:
           return state;
    }
    
};
