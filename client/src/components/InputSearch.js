import React from 'react'

export const InputSearch = ({handleSearchSubmit, handleInputChange, name, style = ''}) => {
  return (
    <>
     <div className= {`${style.nombre} videogames-search` } >
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
    </>
  )
}
