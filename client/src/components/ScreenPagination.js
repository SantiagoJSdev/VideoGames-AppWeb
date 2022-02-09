
import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from './Nav'

export const ScreenPagination = ({gameFilterByGenre, handleSort, handleRating, selectValue, handleSelectChange, handlePrevPage, handleNextPage, maximo, page, state} ) => {
    
   
  
  
  
  
  
    return (
    <>
    
    <div className='videogames-pages'>

            {

              (gameFilterByGenre?.length > 0) ?
            
                <div className='videogames-pages-interno'>

                <div className='videogames-pages-content1'>
                        <Nav
                          handleSort={handleSort}
                          handleRating={handleRating}
                          selectValue={selectValue}
                          handleSelectChange={handleSelectChange}
                        />
                        </div>

                    <div className='videogames-pages-content2'>
                    <ul className='ul-game'>
                    {
                      (gameFilterByGenre.length > 15) ?
                      gameFilterByGenre?.slice((page - 1) * maximo, (page - 1) * maximo + maximo).map(game => (
                        <li className='ul-game-li' key={game.id}>
                          <Link to={`/detail/${game.id}`}>
                            <p>{game.name}</p>
                            <img src={game.image} alt={game.name} />
                          </Link>
                        </li>
                      ))
                      :
                      // has esto
                      gameFilterByGenre.map(game=>(
                        <li className='ul-game-li' key={game.id}>
                          <Link to={`/detail/${game.id}`}>
                            <p>{game.name}</p>
                            <img src={game.image} alt={game.name} />
                          </Link>
                        </li>
                      ))
                    }
                    </ul>
                    <div className='videogames-pages-btn'>
                      <button className='page-btn-1' onClick={handlePrevPage}>Prev page</button>
                      <button className='page-btn-2' onClick={handleNextPage}>Next page</button>
                    </div>
                    </div>
                    </div>
              
                :
                  <div className='videogames-pages-interno'>

                      <div className='videogames-pages-content1'>
                        <Nav
                          handleSort={handleSort}
                          handleRating={handleRating}
                          selectValue={selectValue}
                          handleSelectChange={handleSelectChange}
                        />
                        </div>

                        <div className='videogames-pages-content2'>
                        <ul className='ul-game'>
                        {
                          state.dataGame?.slice((page - 1) * maximo, (page - 1) * maximo + maximo).map(game => (
                            <li className='ul-game-li' key={game.id}>
                              <Link to={`/detail/${game.id}`}>
                                <p>{game.name}</p>
                                <img src={game.image} alt={game.name} />
                              </Link>
                            </li>
                          ))
                        }
                      </ul>
                      <div className='videogames-pages-btn'>
                          <button className='page-btn-1' onClick={handlePrevPage}>Prev page</button>
                          <button className='page-btn-2' onClick={handleNextPage}>Next page</button>
                      </div>
                      </div>
                      
                    </div>

            }
  
          </div>
    
    
    </>
  )
}
