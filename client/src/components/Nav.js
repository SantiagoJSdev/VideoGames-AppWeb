import React from 'react';
import '../styles/navstyles.css'

export const Nav = ({handleSort, handleRating, selectValue, handleSelectChange}) => {
  return <>
             <div className="nav-custom">
                <select className="nav-select-1" value={'0'} onChange={(e) => handleSort(e)}>
                  <option value="0">Order ⇵:</option>
                  <option value="A-Z">A-Z</option>
                  <option value="Z-A">Z-A</option>
                </select>

                <select className="nav-select-1 nav-select-2" value={'0'} onChange={(e) => handleRating(e)}>
                  <option value="0">Rating ⇵:</option>
                  <option value="major">major</option>
                  <option value="minor">minor</option>
                </select>

                <select className="nav-select-1 nav-select-3" value={selectValue} onChange={handleSelectChange}>
                  <option value="0">Select genre:</option>
                  <option value="Action">Action</option>
                  <option value="Adventure">Adventure</option>
                  <option value="RPG">RPG</option>
                  <option value="Shooter">Shooter</option>
                  <option value="Puzzle">Puzzle</option>
                  <option value="Indie">Indie</option>
                  <option value="Platformer">Platformer</option>
                  <option value="Massively Multiplayer">Massively Multiplayer</option>
                  <option value="Sports">Sports</option>
                  <option value="Racing">Racing</option>
                  <option value="Simulation">Simulation</option>
                  <option value="Arcade">Arcade</option>
                  <option value="Strategy">Strategy</option>
                  <option value="Fighting">Fighting</option>
                  <option value="Family">Family</option>
                </select>
          </div>
  
  </>;
};
