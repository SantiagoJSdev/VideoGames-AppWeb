import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { getGameById } from '../selectors/getGameById';

export const DetailPage = () => {


    const state = useSelector( state => state.dataGame );
    const {id} = useParams()
    
 
    const data =  getGameById(state, id);
   
    if ( !data.length ) {
    
        return <Navigate to="/videogame" />;
    }
  



if (!state) {
    return <h1>Loading</h1>
}


  return <>

            <div>
                <ul>
                {
                  data?.map(game => (

                    <li key={game.id}>
                        <h2>{game.name}</h2>
                        <img src={game.image} alt={game.name} />
                        <h3>{game.released}</h3>
                        <h4>{game.rating}</h4>

                        <p>genero</p>
                       <ul>{
                            game.genres.map(g => (
                                <li key={g.id}>{g.name}</li>
                            ))
                        }</ul>
                        
                        <p>plataforma</p>
                       <ul>{
                            game.platforms.map(g => (
                                <li key={g.id}>{g.name}</li>
                            ))
                        }</ul>

                    </li>
                  ))      
                }
                </ul>



            </div>
  
  
  
        </>;
};
