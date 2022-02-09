import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';


import '../styles/createGameStyles.css'


import { useForm } from '../hooks/useForm';

import { validateGlobal } from '../selectors/validateGlobal';
import { getArrayPlatform } from '../selectors/getArrayPlatform';
import { getArrayGenres } from '../selectors/getArrayGenres';
import { joinObject } from '../selectors/joinObject';
import { postVideoGame, startDataGames } from '../actions/dataGames';
import { errorCreateGame } from '../actions/dataError';

export const CreateGame = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const state = useSelector( state => state );
  const [addPlatform, setaddPlatform] = useState([]);
  const [addGenres, setaddGenres] = useState([]
  );

  const [value, handleInputChange, reset, error] = useForm({
    name: '',
    description: '',
    released: '',
    rating: '',
  });
  const {name, description, released, rating} = value;
  
  // const platformTotal = getPlatforms(state.dataGame)
  // busco plataforma por redux
const handlePlatform =(id, name)=> {
  // let data = platformTotal.find(plat => plat.id === id)
  let data = state.game.dataPlatform.find(genre => genre.id === id)
  getArrayPlatform(addPlatform,setaddPlatform, data, name)
  }

const handleGenres = (id, name) => {
  let data = state.game.dataGenres.find(genre => genre.id === id)
  getArrayGenres(addGenres, setaddGenres, data, name)
}

useEffect(() => {
  console.log(state.error.errorData)
}, [error]);

const handleSubmit = (e) => {
  e.preventDefault()
let error = validateGlobal(value, addPlatform, addGenres);
dispatch(errorCreateGame(error))
 
let data = joinObject(value, addGenres, addPlatform);

// no tiene q existir error
if (!Object.keys(error).length) {
  postVideoGame(data)
  dispatch(startDataGames())
}

 let a = e.target.check
 a.forEach(ele => ele.checked = false)
 reset()
 setaddGenres([])
 setaddPlatform([])
}
const handleReturn=()=> {
  navigate('/videogame')
}

  if ( !Object.keys(state.game).length ) {
    
    return <Navigate to="/videogame" />;
}

  return <>
  
            <div className='container-create'>
                <div className='container-create-interno'>
                    <h1>Create new game</h1>
                    <form className='container-create-form' onSubmit={handleSubmit}>
                      <div className='form-interno'>
                          {/* <label>Nombre</label> */}
                          <input
                          autoFocus
                          className='input-name'
                          name='name'
                          autoComplete='off'
                          type='text'
                          placeholder='Name'
                          value={name}
                          onChange={handleInputChange}
                          ></input>
                          <div 
                          
                          className={ !Object.keys(error).length ? 'CreateValidation ' : 'CreateValidation active'}
                          
                          >* Name is Required</div>
                    

                        {/* <label>Descriptión</label> */}
                        <input
                        className='input-description'
                        name='description'
                        autoComplete='off'
                        type='text'
                        placeholder='Descriptión'
                        value={description}
                        onChange={handleInputChange}
                        ></input>
                        <div className={(state.error.errorData?.description === 'Description require')?'CreateValidation active': 'CreateValidation'}
                        >* Descriptión is Required</div>

                        {/* <label>Fecha de lanzamiento</label> */}
                        <input
                        className='input-released'
                        name='released'
                        autoComplete='off'
                        type='date'
                        placeholder='Fecha'
                        value={released}
                        onChange={handleInputChange}
                        ></input>
                        <div className={(state.error.errorData?.released === 'released require')?'CreateValidation active': 'CreateValidation'}
                         >* Released is Required</div>       
                        {/* <label>Rating</label> */}
                        <input
                        className='input-rating'
                        name='rating'
                        autoComplete='off'
                        type='number'
                        min='0'
                        max='5'
                        placeholder='Rating'
                        value={rating}
                        onChange={handleInputChange}
                        ></input>
                        <div className={(state.error.errorData?.rating === 'rating require')?'CreateValidation active': 'CreateValidation'}
                        
                       >* Rating is Required</div> 
                        </div>
                        <div className='div-platform-content'>
                        <div className='div-platform'>
                        <p>Platforms</p>
                        <ul>
                          {
                            state.game.dataPlatform.map(ele=> (
                              <div  key={ele.id}>
                              <li >{ele.name}
                              <input name= {'check'} type='checkbox' onClick={()=>handlePlatform(ele.id, ele.name)} ></input>
                              </li>
                              </div>
                            ))
                            
                          }
                        </ul>
                       </div>
                       <div className={(state.error.errorData?.platforms === 'Platforms require')?'CreateValidation-platforms active2': 'CreateValidation-platforms'}
                        >* Platforms is Required</div> 
                       </div>
                      
                        {/* <select name='select' value={select} onChange={handleInputChange}>
                        <option >Select:</option>
                            {platform.map(p => (
                                <option key= {p.name} value={p.name}>{p.name}</option>
                            ))}
                        </select> */}
                         <div className='div-genres-content'>
                        <div className='div-genres'>
                        <p>Genres</p>
                        <ul>
                          {
                            state.game.dataGenres?.map(ele=> (
                              <div  key={ele.id}>
                              <li >{ele.name}
                              <input name= {'check'} type='checkbox' onClick={()=>handleGenres(ele.id, ele.name)} ></input>
                              </li>
                              </div>
                            ))
                        
                          }
                        </ul>
                        </div>
                        <div className={(state.error.errorData?.genres === 'Genres require')?'CreateValidation-platforms active2': 'CreateValidation-platforms'}
                        >* Genres is Required</div> 
                        </div>
                      <button className='create-btn' type='submit'>Add</button>
                      <button className='create-btn btn-return' onClick={handleReturn}>Return</button>
                        
                    </form>

                </div>
            </div>
  
  </>;
};
