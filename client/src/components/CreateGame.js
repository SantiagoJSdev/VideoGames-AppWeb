import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


import '../styles/createGameStyles.css'


import { useForm } from '../hooks/useForm';

import { validateGlobal } from '../selectors/validateGlobal';
import { getArrayPlatform } from '../selectors/getArrayPlatform';
import { getArrayGenres } from '../selectors/getArrayGenres';

export const CreateGame = () => {

  const state = useSelector( state => state );
  const [addPlatform, setaddPlatform] = useState([]);
  const [addGenres, setaddGenres] = useState([]
  );

  const [value, handleInputChange, reset, error] = useForm({
    name: '',
    descripción: '',
    released: '',
    rating: '',
  });
  const {name, descripción, released, rating} = value;
  
  // const platformTotal = getPlatforms(state.dataGame)
  // busco plataforma por redux

  const handleAdd = () => {
    console.log('resul')
  }
 
const handleSubmit = (e) => {
  e.preventDefault()
console.log(validateGlobal(value, addPlatform, addGenres))

 let a = e.target.check
 a.forEach(ele => ele.checked = false)
 reset()
}

const handlePlatform =(id, name)=> {
  // let data = platformTotal.find(plat => plat.id === id)
  let data = state.dataPlatform.find(genre => genre.id === id)

  getArrayPlatform(addPlatform,setaddPlatform,data,name)
  }

const handleGenres = (id, name) => {
  let data = state.dataGenres.find(genre => genre.id === id)
  getArrayGenres(addGenres, setaddGenres, data, name)
}

  if ( !state.length ) {
    
    return <Navigate to="/videogame" />;
}

  return <>
  
            <div className='container-create'>

                <form onSubmit={handleSubmit}>
                  <div>
                      <label>Nombre</label>
                      <input
                      autoFocus
                      className='input'
                      name='name'
                      autoComplete='off'
                      type='text'
                      placeholder='Name'
                      value={name}
                      onChange={handleInputChange}
                      ></input>
                       <div className='CreateValidation'>* Name is Required</div>
                  </div>

                    <label>Descripción</label>
                    <input
                    name='descripción'
                    autoComplete='off'
                    type='text'
                    placeholder='Descripción'
                    value={descripción}
                    onChange={handleInputChange}
                    ></input>

                    <label>Fecha de lanzamiento</label>
                    <input
                    name='released'
                    autoComplete='off'
                    type='date'
                    placeholder='Fecha'
                    value={released}
                    onChange={handleInputChange}
                    ></input>

                    <label>Rating</label>
                    <input
                    name='rating'
                    autoComplete='off'
                    type='number'
                    min='0'
                    max='5'
                    placeholder='Rating'
                    value={rating}
                    onChange={handleInputChange}
                    ></input>

                    <p>Platforms</p>
                    <ul>
                      {
                        state.dataPlatform.map(ele=> (
                          <div  key={ele.id}>
                          <li >{ele.name}
                          <input name= {'check'} type='checkbox' onClick={()=>handlePlatform(ele.id, ele.name)} ></input>
                          </li>
                          </div>
                        ))
                        
                      }
                    </ul>
                    {/* <select name='select' value={select} onChange={handleInputChange}>
                    <option >Select:</option>
                        {platform.map(p => (
                            <option key= {p.name} value={p.name}>{p.name}</option>
                        ))}
                    </select> */}

                    <p>Genres</p>
                    <ul>
                      {
                        state.dataGenres.map(ele=> (
                          <div  key={ele.id}>
                          <li >{ele.name}
                          <input name= {'check'} type='checkbox' onClick={()=>handleGenres(ele.id, ele.name)} ></input>
                          </li>
                          </div>
                        ))
                     
                      }
                    </ul>
                  <button type='submit'>Add</button>
                    
                </form>

                <button onClick={handleAdd}>Crear</button>
            </div>
  
  </>;
};
