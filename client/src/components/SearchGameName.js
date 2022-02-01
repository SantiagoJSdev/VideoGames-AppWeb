import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteAddByName } from '../actions/dataGames';


export const SearchGameName = () => {

   const state = useSelector( state => state.dataName );
   const dispatch = useDispatch();
   const navigate =  useNavigate()

    const handleReturn = () => {
      dispatch(deleteAddByName())
        navigate('/videogame')
    }


  return <>
      <button onClick={handleReturn}>return</button>
      <ul>
    {
       
        state?.map(ele=>(
            <li key={ele.id}>{ele.name}</li>
        ))
      
    }
      </ul>

  </>;
};
