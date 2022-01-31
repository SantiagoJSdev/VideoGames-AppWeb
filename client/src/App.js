import React from 'react'
import { useNavigate } from 'react-router-dom';
import './App.css';

import {startDataGames} from './actions/dataGames'
import { useDispatch } from 'react-redux';

function App() {

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleScreemPrincipal = async () => {
    dispatch(startDataGames()) 
    navigate('/videogame')
   
  }


  return (
    <div className="App">
      <h1>Henry Videogames</h1>
      <button onClick={handleScreemPrincipal}>Page principal</button>
    </div>
  );
}

export default App;
