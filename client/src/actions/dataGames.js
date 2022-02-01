import { types } from "../types/types"


export const startDataGames = () => {
    return async (dispatch)=> {
        try{
        let resp = await fetch('http://localhost:3001/videogames')
        let data  = await resp.json()
        dispatch(startAdd(data))
        }catch(e) {
        console.log('Game not found')
    }
}
}

export const startAdd = (data) => {
    return {
        type: types.GETDATA,
        payload: data
    }
}

export const startDataGamesByName = (name) => {
    return async (dispatch)=> {
        try{
            let resp = await fetch(`http://localhost:3001/videogames?name=${name}`)
            let  data  = await resp.json()
            dispatch(startAddByName(data))
        } catch(e) {
            console.log('Game not found')
        }
        
    }
}
export const startAddByName = (data) => {
    return {
        type: types.GETDATABYNAME,
        payload: data
    }
}
export const deleteAddByName = () => {
    return {
        type: types.DELETEBYNAME,
       
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

export const postVideoGame = async (data)=> {

        const post = await fetch("http://localhost:3001/videogames", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data)
    });
        let resul = await post.json();
        console.log(resul)
        return resul
}