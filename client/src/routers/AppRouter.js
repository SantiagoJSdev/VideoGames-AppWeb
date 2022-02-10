import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom'
import App from '../App';
import { CreateGame } from '../components/CreateGame';
import { DetailPage } from '../components/DetailPage';
import { SearchGameName } from '../components/SearchGameName';
import { VideoGames } from '../components/VideoGames';

export const AppRouter = () => {

  return (


        <Routes>
            <Route path="/" element= {<App/>}/>
            <Route path="/videogame" element= {<VideoGames/>}/>
            <Route path="/search" element= {<SearchGameName/>}/>
            <Route path="/detail/:id" element= {<DetailPage/>}/>
            <Route path="/create" element= {<CreateGame/>}/>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>



 




 
)};
