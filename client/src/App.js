import React from 'react'
import { useNavigate } from 'react-router-dom';
import './App.css';

// import {startDataGames} from './actions/dataGames'
// import { useDispatch } from 'react-redux';

function App() {

  const navigate = useNavigate()
  // const dispatch = useDispatch();

  const handleScreemPrincipal = () => {
    // dispatch(startDataGames()) 
    navigate('/videogame')
   
  }


  return (
    <div className="App-container">
      <div className="App-container-interno">
        <div className="interno-curva">
            <div className="interno-curva-image"></div>
        </div>
        <div className="interno-curva-2">
            <div className="interno-curva-2-image"></div>
        </div>
        <div className="minicurva right-1"></div>
        <div className="minicurva right-2"></div>
        <div className="minicurva right-3"></div>
        <div className="minicurva right-4"></div>

      <h1 className='App-Title'>VIDEOGAMES</h1>
      <button className='App-btn' onClick={handleScreemPrincipal}><p>Get it now</p></button>

      </div>
   
    </div>
  );
}

export default App;
