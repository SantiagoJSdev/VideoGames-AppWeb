import React from 'react';
import { Route, Routes } from 'react-router-dom'
import App from '../App';
import { VideoGames } from '../components/VideoGames';

export const AppRouter = () => {

  return (


        <Routes>
            <Route path="/" element= {<App/>}/>
            <Route path="/videogame" element= {<VideoGames/>}/>
        </Routes>



 




 
)};
