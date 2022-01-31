import React from 'react';

export const Nav = ({handleSort, handleRating}) => {
  return <>
             <div className="nav-custom">
                <select value={'0'} onChange={(e) => handleSort(e)}>
                  <option value="0">Order ⇵:</option>
                  <option value="A-Z">A-Z</option>
                  <option value="Z-A">Z-A</option>
                </select>

                <select value={'0'} onChange={(e) => handleRating(e)}>
                  <option value="0">Rating ⇵:</option>
                  <option value="major">major</option>
                  <option value="minor">minor</option>
                </select>
          </div>
  
  </>;
};
