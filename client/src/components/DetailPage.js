import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { startDataGamesByIdDataBase } from '../actions/dataGames';


export const DetailPage = () => {

    const dispatch = useDispatch();
    const {id} = useParams()
    
    useEffect(() => {
     
        dispatch(startDataGamesByIdDataBase(id))
        }, [dispatch, id]);
        
    const state = useSelector( state => state.game.dataGameById );
  


    
    console.log(state)
    // aca obtengo el game x redux
    // const state = useSelector( state => state.dataGame );
    // const data =  getGameById(state, id);
    if (!state) {
        return <h1>Loading</h1>
    }
  
    // if ( !Object.keys(state).length ) {
    
    //     return <Navigate to="/videogame" />;
    // }


   


  return <>

            <div>
                <ul>
                {
                        state ?

                        <li key={state.id}>
                        <h2>{state.name}</h2>
                         <img src={state.background_image} alt={state.name} />
                        <h3>{state.released}</h3>
                        <h4>{state.rating}</h4>
                        <p>{state.description}</p>

                        <p>Genero</p>
                        <ul>{
                            state.genres.map(g => (
                                <li key={g.id}>{g.name}</li>
                            ))
                        }</ul>
                        
                        <p>plataforma</p>
                        <ul>{
                            state.platforms.map(g => (
                              (g.platform) ? <li key={g.platform.id}>{g.platform.name}</li> 
                              : 
                              <li key={g.id}>{g.name}</li>
                            ))
                        }</ul> 

                    </li>
                    :
                    ''
    
                }
                </ul>



            </div>
  
  
  
        </>;
};
