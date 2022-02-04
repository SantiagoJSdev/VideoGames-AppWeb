import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {usePage} from '../hooks/usePage'
import { useForm } from '../hooks/useForm'

import queryString from 'query-string';

// import {getGameByName} from '../selectors/getGameByName'

import '../styles/videoGamesStyle.css'
import { useSelect } from '../hooks/useSelect';
import { getGameByGenre } from '../selectors/getGameByGenre';
import { Nav } from './Nav';
import { orderByRating, orderBySort, startDataGames, startDataGamesByName, startDataGenres } from '../actions/dataGames';



export const VideoGames = () => {
  const dispatch = useDispatch();
  const state = useSelector( state => state );
  
useEffect(() => {
  dispatch(startDataGames()) 
  dispatch(startDataGenres())
}, [dispatch]);


  const location = useLocation();
  const navigate = useNavigate();
  const { q = '' } = queryString.parse( location.search );
  // const query = new URLSearchParams(location.search);
  // const q = query.get('q') || '';

 


  const {maximo, page, setpage} = usePage()

  const [formValues, handleInputChange, reset] = useForm({
    searchText: q
  })
  const {searchText} = formValues;

  const [selectValue, handleSelectChange] = useSelect('0')
  
  // const gameFilterByName = useMemo(() => getGameByName( q, state.dataGame ), [q, state.dataGame ])
  const gameFilterByGenre = useMemo(() => getGameByGenre(state.dataGame, selectValue ), [ state.dataGame, selectValue ])

  if (!state.dataGame) {
    return <h2>Loaging..</h2>
  }

    const handleNextPage = () => {
      setpage(page + 1)
    }
    const handlePrevPage = () => {
      setpage(page - 1)
    }
    if (page === 0 ) {
      setpage(1)
    }
    if (page === 8 ) {
      setpage(7)
    }

    const handleSearchSubmit = (e) => {
      e.preventDefault()
      navigate(`?q=${searchText}`)
     
      dispatch(startDataGamesByName(searchText))
      reset()
      navigate('/search')
    }
    
    const handleSort = (e) => {
      e.preventDefault();
      console.log(e.target.value)
      dispatch(orderBySort(e.target.value))
      
    }
    const  handleRating = (e) => {
      e.preventDefault();
      console.log(e.target.value)
      dispatch(orderByRating(e.target.value))
    }

    const onclick20 = () => {
      // const data =   {
      //   name: 'santiagoa',
      //   description: 'hjghjgjgjhdshfah',
      //   gender: "Action",
      //   platforms: "Xbox One"
      // }
      // postVideoGame(data)
      
    }
    const handleCreate = () => {
      navigate('/create')
    }
  return <>

          <form onSubmit={handleSearchSubmit}>
            <label>Buscar</label>
            <input
            type='text'
            name='searchText'
            autoComplete='off'
            placeholder='Agregar Titulo'
            value={searchText}
            onChange={handleInputChange}
            ></input>
          </form>

          <div className="custom-select">
                <select value={selectValue} onChange={handleSelectChange}>
                  <option value="0">Select genre:</option>
                  <option value="Action">Action</option>
                  <option value="Adventure">Adventure</option>
                  <option value="RPG">RPG</option>
                  <option value="Shooter">Shooter</option>
                  <option value="Puzzle">Puzzle</option>
                  <option value="Indie">Indie</option>
                  <option value="Platformer">Platformer</option>
                  <option value="Massively Multiplayer">Massively Multiplayer</option>
                  <option value="Sports">Sports</option>
                  <option value="Racing">Racing</option>
                  <option value="Simulation">Simulation</option>
                  <option value="Arcade">Arcade</option>
                  <option value="Strategy">Strategy</option>
                  <option value="Fighting">Fighting</option>
                  <option value="Family">Family</option>
                </select>
          </div>

          {
            // (gameFilterByName.length > 0) ?
          //   <ul>
          //  {
          //   gameFilterByName.map(game => (
          //     <li key={game.id}>{game.name}</li>
          //   ))
          //   }
          //   </ul>
          //   :

            (gameFilterByGenre.length > 0) ?
              <div>
                <ul>
                {gameFilterByGenre.map(ele=>(
                  <li key={ele.id}>{ele.name}</li>
                ))}
                </ul>
              </div>
              :
            <div>
            <ul className='ul-game'>
              <Nav
              handleSort=  { handleSort }
              handleRating={ handleRating}
              />
            {
              state.dataGame?.slice((page - 1) * maximo, (page - 1) * maximo + maximo).map(game=> (
                <li key={game.id}>
                  <Link to= {`/detail/${game.id}`}>
                  <p>{JSON.stringify(game.name)}</p>
                  <img src={game.image} alt={game.name} />
                  </Link>
                </li>
              ))
            }
            </ul>
            <button onClick={handlePrevPage}>Prev page</button>
            <button onClick={handleNextPage}>Next page</button>
            </div>
            
          }
         
<button onClick={onclick20}> adddddddddddd</button>
<button onClick={handleCreate}> creacion de video juego</button>
  </>;
};
