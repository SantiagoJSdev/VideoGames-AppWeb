import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';

import '../styles/createGameStyles.css'



import { getPlatforms } from '../selectors/getPlatforms';
import { validate } from '../selectors/validate';
import { validateGlobal } from '../selectors/validateGlobal';

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
  useEffect(() => {
    console.log(error)
   
    
  }, [value]);
  // 

  const platformTotal = getPlatforms(state.dataGame)
  
 
  const handleAdd = () => {

   
   
    console.log('resul')
  }
 
  const handlePlatform =(e,id, name)=> {
  
  let data = platformTotal.find(plat => plat.id === id)
  let resul = false
  addPlatform.filter(ele => {
    if  (ele.name === name) {
      resul = true
      return setaddPlatform(a => (a.map(item => item.name === name ? {...item, completado: !item.completado} : item))) 
    } 
   })
   if (!resul) {
    return  setaddPlatform( a =>  [...a, {name: data.name, completado: true}])
    }
}



const handleSubmit = (e) => {
  e.preventDefault()


console.log(validateGlobal(value, addPlatform, addGenres))

 let a = e.target.check
 a.forEach(ele => ele.checked = false)
 reset()
  
}


const handleGenres = (id, name) => {
    let data = state.dataGenres.find(genre => genre.id === id)
    let resul = false
    // if (addGenres?.length === 0){
    //  return setaddGenres( addP =>  [...addP, {name: data.name, completado: true}])
    // }
    addGenres.filter(ele=>{
     if  (ele.name === name) {
       resul = true
       return setaddGenres(a => (a.map(item => item.name === name ? {...item, completado: !item.completado} : item))) 
     } 
    })
      if (!resul) {
      return  setaddGenres( a =>  [...a, {name: data.name, completado: true}])
      }
}

  if ( !platformTotal.length ) {
    
    return <Navigate to="/videogame" />;
}

const focus = (e) => {
  console.log('focus')
  console.log(error)
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
                       onFocus={focus}
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
                        platformTotal.map(ele=> (
                          <div  key={ele.id}>
                          <li >{ele.name}
                          <input name= {'check'} type='checkbox' defaultChecked = {false}  onClick={(e)=>handlePlatform(e,ele.id, ele.name)} ></input>
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
