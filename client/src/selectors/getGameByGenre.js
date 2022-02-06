

export const getGameByGenre = (data, name) => {

    if ( name === '0' ) {
        return [];
    }

    return data.filter( game => game.genres.find(ele => ele.name === name) ) 

};
