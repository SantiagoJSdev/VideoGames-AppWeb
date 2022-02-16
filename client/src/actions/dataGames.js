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

export const 
postVideoGame = async (data)=> {

        const post = await fetch("http://localhost:3001/videogames", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data)
    });
        let resul = await post.json();
   
        return resul
}
export const startDataGenres = () => {
    return async (dispatch)=> {
        try{
        let resp = await fetch('http://localhost:3001/genres')
        let data  = await resp.json()
        dispatch(startAddGenres(data))
        }catch(e) {
        console.log('genres not found')
    }
}
}
export const startAddGenres = (data) => {
    return {
        type: types.GETDATABYGENRES,
        payload: data
    }
}
////////////////////////////////////
export const startDataPlatform = () => {
    return async (dispatch)=> {
        try{
        let resp = await fetch('http://localhost:3001/platform')
        let data  = await resp.json()
        dispatch(startAddPlatform(data))
        }catch(e) {
        console.log('platform not found')
    }
}
}
export const startAddPlatform = (data) => {
    return {
        type: types.GETDATABYPLATFORM,
        payload: data
    }
}
//////////////////////////////////////////
export const startDataGamesByIdDataBase = (id) => {
    return async (dispatch)=> {
        try{
            let resp = await fetch(`http://localhost:3001/videogames/${id}`)
            let  data  = await resp.json()
            dispatch(startAddByGameIdDB(data))
        } catch(e) {
            console.log('Id not found')
        }
        
    }
}
export const startAddByGameIdDB = (data) => {
    return {
        type: types.ADDBYGAMEIDDB,
        payload: data
    }
}

////search/api/////////////
export const startSearchApi = (name) => {
    return async (dispatch)=> {
        try{
            let resp = await fetch(`http://localhost:3001/search?name=${name}`)
            let  data  = await resp.json()
            console.log(data)
        } catch(e) {
            console.log('name not found')
        }
        
    }
}