

export const getGameByGenre = (data, name) => {

    if ( name === '0' ) {
        return [];
    }

    return data.filter( games => {
       return games.genres.find(ele => ele.name === name) 
    } );
};
