


export const getGameByName = (name, state) => {

    if ( name === '' ) {
        return [];
    }

    name = name.toLowerCase();
 
    

    return state.filter(game => game.name.toLowerCase().includes( name ))
};
