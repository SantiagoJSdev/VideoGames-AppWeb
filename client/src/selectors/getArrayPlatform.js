


export const getArrayPlatform = (addPlatform, setaddPlatform, data, name) => {
 
    let resul = false
    addPlatform.forEach(ele => {
      if  (ele.name === name) {
        resul = true
        return setaddPlatform(a => (a.map(item => item.name === name ? {...item, completado: !item.completado} : item))) 
      } 
     })
     //aqui es true entra
     if (!resul) {
      return  setaddPlatform( a =>  [...a, {name: data.name, completado: true}])
      }

};
