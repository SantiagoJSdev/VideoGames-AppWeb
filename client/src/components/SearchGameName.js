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

    if (!state) {
      return <h1>Loading</h1>
    }

  return <>
      <button onClick={handleReturn}>return</button>
      <ul>
    {
       (state.length > 0) ?
        state?.map(ele=>(
          <li key={ele.id}>{ele.name}</li>
      ))
      :
      <h2>

      <p>{state.msg}</p>
      </h2>
      
      
    }
      </ul>

  </>;
};
