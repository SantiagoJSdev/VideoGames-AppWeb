import React from 'react';
import { useSelector } from 'react-redux';

import {usePage} from '../hooks/usePage'

import '../styles/videoGamesStyle.css'


export const VideoGames = () => {
  const state = useSelector( state => state );
  const {maximo, page, setpage} = usePage()
console.log(maximo)


  if (!state.dataGame) {
    return <h2>Loaging..</h2>
  }
    console.log(state.dataGame)
    const handleNextPage = () => {
      setpage(page + 1)
    }
    const handlePrevPage = () => {
      setpage(page - 1)
    }
  return <>

          <form>
            <label>Buscar</label>
            <input
            name='title'
            autoComplete='off'
            placeholder='Agregar Titulo'
            ></input>
          </form>


          <ul className='ul-game'>
          {
            state.dataGame?.slice((page - 1) * maximo, (page - 1) * maximo + maximo).map(game=> (
              <li key={game.id}> <p>{JSON.stringify(game.name)}</p>
                <img src={game.image} alt={game.name} />
              </li>
            ))
          }
          </ul>
          <button onClick={handlePrevPage}>Prev page</button>
          <button onClick={handleNextPage}>Next page</button>


  </>;
};
