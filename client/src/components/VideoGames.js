import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { usePage } from '../hooks/usePage'
import { useFormVideoGame } from '../hooks/useFormVideoGame'

import queryString from 'query-string';

// import {getGameByName} from '../selectors/getGameByName'

import '../styles/videoGamesStyle.css'
import { useSelect } from '../hooks/useSelect';
import { getGameByGenre } from '../selectors/getGameByGenre';
import { Nav } from './Nav';
import { orderByRating, orderBySort, startDataGames, startDataGamesByName, startDataGenres, startDataPlatform } from '../actions/dataGames';
import { ScreenPagination } from './ScreenPagination';



export const VideoGames = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.game);


  useEffect(() => {
    dispatch(startDataGames())
    dispatch(startDataGenres())
    dispatch(startDataPlatform())
  }, [dispatch]);

  const { maximo, page, setpage } = usePage()
  const location = useLocation();
  const navigate = useNavigate();
  const { q = '' } = queryString.parse(location.search);
  // const query = new URLSearchParams(location.search);
  // const q = query.get('q') || '';






  const [formValues, handleInputChange, reset, error] = useFormVideoGame({
    name: q
  })
  const { name } = formValues;

  const [selectValue, handleSelectChange] = useSelect('0')

  // const gameFilterByName = useMemo(() => getGameByName( q, state.dataGame ), [q, state.dataGame ])
  const gameFilterByGenre = useMemo(() => getGameByGenre(state.dataGame, selectValue, setpage), [state.dataGame, selectValue])



  if (!state.dataGame) {
    return <h2>Loaging..</h2>
  }

  const handleNextPage = () => {
    setpage(page + 1)
  }
  const handlePrevPage = () => {
    setpage(page - 1)
  }
  if (page === 0) {
    setpage(1)
  }
  if (page === 8) {
    setpage(7)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    navigate(`?q=${name}`)

    dispatch(startDataGamesByName(name))
    reset()
    navigate('/search')
  }

  const handleSort = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    dispatch(orderBySort(e.target.value))

  }
  const handleRating = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    dispatch(orderByRating(e.target.value))
  }

  return <>


    <div className='container-videogames'>
      <div className='container-videogames-interno'>
        <div className='container-videogames-interno-left'>
          <div className='videogames-side'></div>
        </div>
        <div className='container-videogames-interno-right'>

          <div className='interno-right-nav'>

            <div className='videogames-search'>
              <form onSubmit={handleSearchSubmit}>

                <input
                  className='search-input'
                  type='text'
                  name='name'
                  autoComplete='off'
                  placeholder='SEARCH'
                  value={name}
                  onChange={handleInputChange}
                ></input>
                <button className='search-btn' type='submit'></button>
              </form>
            </div>

            <div className='videogames-nav'>
              <div className='videogames-nav-content1'>
                <ul>
                  <li className='content1-app'><a href='www.google.com'>App</a></li>
                  <li className='content1-game'><a href='www.google.com'>Game</a></li>
                  <li className='content1-create'><Link to={'/create'}>New Game</Link></li>
                </ul>
              </div>
              <div className='videogames-nav-content2'>
                <ul>
                  <li className='content1-mail'></li>
                  <li className='content1-login'>Login</li>

                </ul>
              </div>
            </div>
          </div>


          <div className='videogames-header'>
            <div className='videogames-header-interno btn-grad'>
              <div className='header-container'>
                <h1>VideoGames</h1>
                <p>Welcome to the app and game store</p>
                <button className='header-container-btn'>More</button>
                {/* <h3>More</h3> */}
              </div>
            </div>
          </div>
  {/* ////////////////////////////aquiiiiiiiiiiiiiiiiiiiiiiiii/////////////// */}
  {/* gameFilterByGenre, handleSort, handleRating, selectValue, 
  handleSelectChange, handlePrevPage, handleNextPage */}
  {/* maximo, page, setpage  */}
          <ScreenPagination
          gameFilterByGenre={gameFilterByGenre}
          handleSort={handleSort}
          handleRating={handleRating}
          selectValue={selectValue}
          handleSelectChange={handleSelectChange}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          page={page}
          maximo={maximo}
          state={state}
          />
          
            {/* ////////////////////////////aquiiiiiiiiiiiiiiiiiiiiiiiii/////////////// */}
          <div className='videogames-CreateGame'> </div>
        </div>


      </div>
    </div>
  </>;
};
