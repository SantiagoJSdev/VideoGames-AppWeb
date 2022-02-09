import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { deleteAddByName, startDataGamesByName } from '../actions/dataGames';
import { usePage } from '../hooks/usePage';

import '../styles/searchGameStyles.css'
import queryString from 'query-string';

export const SearchGameName = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const name  = queryString.parse(location.search) || '';
   // const query = new URLSearchParams(location.search);
  // const q = query.get('q') || '';

  
  useEffect(() => {
    
    dispatch(startDataGamesByName(name.q))
   
  }, [dispatch])

  const { maximo, page, setpage } = usePage()

  const state = useSelector(state => state.game.dataName);
  console.log(state,'1')
  
 

  
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

  if (!state) {
    return <h1>Loading</h1>
  }
  const handleSearch=()=>{
    dispatch(deleteAddByName())
    navigate('/videogame')
  }

  return <>

    <div className='container-search'>
      <div className='container-search-interno'>
        <div className='search-pages'>
          <div className='search-pages-content2'>
            <ul className='ul-game'>
              {
                (state.length > 15) ?
                  state?.slice((page - 1) * maximo, (page - 1) * maximo + maximo).map(game => (
                    <li className='ul-game-li' key={game.id}>
                      <Link to={`/detail/${game.id}`}>
                        <p>{game.name}</p>
                        <img src={game.image} alt={game.name} />
                      </Link>
                    </li>
                  ))
                  
                  :
                  (!state.length)
                  ?
                  <li className='ul-game-li' >
                      <h1>Name not found</h1>
                    </li>
                  :
                  state?.map(game => (
                    <li className='ul-game-li' key={game.id}>
                      <Link to={`/detail/${game.id}`}>
                        <p>{game.name}</p>
                        <img src={game.image} alt={game.name} />
                      </Link>
                    </li>
                  ))
              }
            </ul>
            {
              (state.length > 15)
              &&
              <div className='search-pages-btn'>
                <button className='search-btn-1' onClick={handlePrevPage}>Prev page</button>
                <button className='search-btn-2' onClick={handleNextPage}>Next page</button>
              </div>

            }
            <div className='search-return'>
            <ul>
              <li onClick={handleSearch} className='search-mail'>Return</li>
            </ul>
            </div>
          </div>














          {/* <button onClick={handleReturn}>return</button>
          <ul>
            {
              (state.length > 0) ?
                state?.map(ele => (
                  <li key={ele.id}>{ele.name}</li>
                ))
                :
                <h2>

                  <p>{state.msg}</p>
                </h2>


            }
          </ul> */}
        </div>

      </div>
    </div>
  </>;
};
