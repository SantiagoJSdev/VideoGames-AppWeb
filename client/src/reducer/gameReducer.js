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

        case types.ORDERBYSORT:
            let sortBy = action.payload === 'A-Z' ?
            state.dataGame.sort((a,b)=> (a.name > b.name) ? 1 : (b.name > a.name) ? -1 : 0 )
            :
            state.dataGame.sort((a,b)=> (a.name > b.name) ? -1 : (b.name > a.name) ? 1 : 0 )
            return {
                ...state,
                dataGame: sortBy
            }

        case types.ORDERBYRATING:

            let sortRating = action.payload === "minor" ?
            state.dataGame.sort( (a, b) => {
                if (a.rating > b.rating) {
                    return 1;
                }
                if (b.rating > a.rating) {
                    return -1;
                }
                return 0;
            })
            :state.dataGame.sort((a, b) =>{
                if (a.rating > b.rating) {
                    return -1;
                }
                if (b.rating > a.rating) {
                    return 1;
                }
                return 0;
            });
            return {
                ...state,
                dataGame: sortRating,
            };
        
        
    
        default:
           return state;
    }
    
};
