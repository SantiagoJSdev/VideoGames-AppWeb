import { types } from "../types/types"


export const startDataGames = () => {
    return async (dispatch)=> {
        let resp = await fetch('http://localhost:3001/videogames')
            let  data  = await resp.json()
        dispatch(startAdd(data))
    }
}

export const startAdd = (data) => {
    return {
        type: types.GETDATA,
        payload: data
    }
}

export const orderBySort = (value) => {
    return {
        type: types.ORDERBYSORT,
        payload: value
    }
}

export const orderByRating = (value) => {
    return {
        type: types.ORDERBYRATING,
        payload: value
    }
}