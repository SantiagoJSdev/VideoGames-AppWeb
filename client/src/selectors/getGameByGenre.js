

export const getGameByGenre = (data, name, setpage) => {

    if ( name === '0' ) {
        return [];
    }
    setpage(1)
    return data.filter( game => game.genres.find(ele => ele.name === name) ) 

};
