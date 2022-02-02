import React from 'react';

export const CreateGame = () => {
  return <>
  
            <div className='container-create'>

                <form>
                    <label>Nombre</label>
                    <input
                    name='name'
                    autoComplete='off'
                    type='text'
                    placeholder='Name'
                    ></input>

                    <label>Descripción</label>
                    <input
                    name='Descripción'
                    autoComplete='off'
                    type='text'
                    placeholder='Descripción'
                    ></input>

                    <label>Fecha de lanzamiento</label>
                    <input
                    name='released'
                    autoComplete='off'
                    type='date'
                    placeholder='Fecha'
                    ></input>

                    <label>Rating</label>
                    <input
                    name='Rating'
                    autoComplete='off'
                    type='number'
                    min='0'
                    max='5'
                    placeholder='Rating'
                    ></input>

                    
                </form>
            </div>
  
  </>;
};
