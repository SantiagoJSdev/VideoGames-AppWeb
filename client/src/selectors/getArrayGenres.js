

export const getArrayGenres = (addGenres, setaddGenres, data, name) => {
    let resul = false
    addGenres.forEach(ele=>{
     if  (ele.name === name) {
       resul = true
       return setaddGenres(a => (a.map(item => item.name === name ? {...item, completado: !item.completado} : item))) 
     } 
    })
      if (!resul) {
      return  setaddGenres( a =>  [...a, {name: data.name, completado: true}])
      }
};
