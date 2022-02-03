


export const getPlatforms = (data) => {

    if ( !data) {
        return [];
    }
 let platform = {}

     data.map(game => {
        
            return game.platforms.map(ele => {
           
             platform[ele.name] = ele.id
            return platform

        })})
        // console.log(platform)
  return Object.keys(platform).map(ele=> ({name: ele, id: platform[ele]})) 
    
};

