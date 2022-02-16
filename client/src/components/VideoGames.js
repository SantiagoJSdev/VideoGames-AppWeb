import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { usePage } from '../hooks/usePage'
import { useFormVideoGame } from '../hooks/useFormVideoGame'



// import {getGameByName} from '../selectors/getGameByName'

import '../styles/videoGamesStyle.css'
import { useSelect } from '../hooks/useSelect';
import { getGameByGenre } from '../selectors/getGameByGenre';
import { orderByRating, orderBySort, startDataGames, startDataGenres, startDataPlatform } from '../actions/dataGames';
import { ScreenPagination } from './ScreenPagination';
import { InputSearch } from './InputSearch';



export const VideoGames = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.game);

  const { maximo, page, setpage } = usePage()
  
  const navigate = useNavigate();

  const [formValues, handleInputChange, reset, error] = useFormVideoGame({
    name: ''
  })
  const { name } = formValues;
  useEffect(() => {
    dispatch(startDataGames())
    dispatch(startDataGenres())
    dispatch(startDataPlatform())
  }, [dispatch]);

  const [selectValue, handleSelectChange] = useSelect('0')

  // const gameFilterByName = useMemo(() => getGameByName( q, state.dataGame ), [q, state.dataGame ])
  const gameFilterByGenre = useMemo(() => getGameByGenre(state.dataGame, selectValue, setpage), [state.dataGame, selectValue, setpage])



  if (!state.dataGame) {
    return <div className='Loading'>
      <h2 className='animation-loading'>
      <div></div>
      <div></div>
      <div></div>
      </h2>
    </div>
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
   
    if (!Object.keys(error).length && name.length !== 0 ) {
      navigate(`/search?q=${name}`)
    }
    
    reset()
  }

  const handleSort = (e) => {
    e.preventDefault();

    dispatch(orderBySort(e.target.value))

  }
  const handleRating = (e) => {
    e.preventDefault();
    
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
{/* //////////////////////videogames-search//////////////// */}
            <InputSearch
            handleSearchSubmit={handleSearchSubmit}
            handleInputChange={handleInputChange}
            name={name}
            />
{/* ///////////////////////////////////////// */}
            <div className='videogames-nav'>
              <div className='videogames-nav-content1'>
                <ul>
                  <li className='content1-app'><Link to={'/'}>App</Link></li>
                  <li className='content1-game'><Link to={'/'}>Game</Link></li>
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
