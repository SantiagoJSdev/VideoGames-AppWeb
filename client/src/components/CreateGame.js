import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { useSelect } from '../hooks/useSelect';
import { getPlatforms } from '../selectors/getPlatforms';

export const CreateGame = () => {

  const state = useSelector( state => state.dataGame );



  const [value, handleInputChange, reset] = useForm({
    name: '',
    descripción: '',
    released: '',
    rating: '',
    select:''

  });
  const {name, descripción, released, rating, select} = value;

  const [selectValue, handleInputChangeSE] = useSelect('0')
  const platform = getPlatforms(state)
  

  const handleAdd = () => {
    console.log('click')
  }
  const handleSubmit = (e) => {
    e.preventDefault()
 
    console.log(selectValue)
    reset()
  }


  
  if ( !platform.length ) {
    
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
                        platform.map(ele=> (
                          <div  key={ele.id}>
                          <li>{ele.name}
                          <input value={selectValue} type='checkbox'  onChange={handleInputChangeSE} ></input>
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


                  <button type='submit'>Add</button>
                    
                </form>

                <button onClick={handleAdd}>Crear</button>
            </div>
  
  </>;
};
