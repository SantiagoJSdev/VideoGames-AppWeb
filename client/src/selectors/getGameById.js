


export const getGameById = (data, id) => {
  
    if ( !data ) {
        return [];
    }
    return data.filter( game => game.id === (id * 1));
};
