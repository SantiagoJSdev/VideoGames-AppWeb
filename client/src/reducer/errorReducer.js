import { types } from "../types/types";



export const errorReducer = (state = {}, action) => {

    switch (action.type) {
        
        case types.ERRORCREATEGAME:
            return {
                ...state,
                errorData: action.payload
            }
    
        default:
          return state;
    }
 
    
};
