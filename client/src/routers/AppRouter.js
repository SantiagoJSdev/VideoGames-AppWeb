import React from 'react';
import { Route, Routes } from 'react-router-dom'
import App from '../App';
import { SearchGameName } from '../components/SearchGameName';
import { VideoGames } from '../components/VideoGames';

export const AppRouter = () => {

  return (


        <Routes>
            <Route path="/" element= {<App/>}/>
            <Route path="/videogame" element= {<VideoGames/>}/>
            <Route path="/search" element= {<SearchGameName/>}/>
        </Routes>



 




 
)};
