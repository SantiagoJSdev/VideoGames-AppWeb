import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';



import { getPlatforms } from '../selectors/getPlatforms';

export const CreateGame = () => {

  const state = useSelector( state => state );
  const [addPlatform, setaddPlatform] = useState([]);
  const [addGenres, setaddGenres] = useState([]
  );

useEffect(() => {
  console.log(addPlatform)
}, [addPlatform]);

  // genres: {
  //   data: [],
  //   completado: false
  // }
  // setaddPlatform({...addPlatform, genres:{...addPlatform.genres, data:[...addPlatform.genres.data, data.name], completado: true}})
  // setaddPlatform( addP => ( {...addP, genres:[...addP.genres, {data: data.name, completado: !addP.genres.completado}]}))

  const [value, handleInputChange, reset] = useForm({
    name: '',
    descripción: '',
    released: '',
    rating: '',
  
  });
  const {name, descripción, released, rating} = value;


  const platformTotal = getPlatforms(state.dataGame)
  

  const handleAdd = () => {
    console.log('click')
  }
  const handleSubmit = (e) => {
    e.preventDefault()
 
    reset()
  }
const handlePlatform =(id, name)=> {
  
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
     
      
      
  
      
    
  //  if (addPlatform.genres?.length > 0){
  //   setaddPlatform(a => a.genres.map(item => item.data === name ? {...item, completado: !item.completado} : item)) 
 
}


  if ( !platformTotal.length ) {
    
    return <Navigate to="/videogame" />;
}

  return <>
  
            <div className='container-create'>

                <form onSubmit={handleSubmit}>
                    <label>Nombre</label>
                    <input
                    name='name'
                    autoComplete='off'
                    type='text'
                    placeholder='Name'
                    value={name}
                    onChange={handleInputChange}
                    ></input>

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
                        platformTotal.map(ele=> (
                          <div  key={ele.id}>
                          <li >{ele.name}
                          <input type='checkbox' onClick={()=>handlePlatform(ele.id, ele.name)} ></input>
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
                          <input type='checkbox' onClick={()=>handleGenres(ele.id, ele.name)} ></input>
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
