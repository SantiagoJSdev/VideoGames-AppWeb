

export const validateGlobal = (value, addPlatform = [], addGenres =[] ) => {
    let errorGlobal = {};
    if (value.name.trim().length === 0 || value.name.trim().length < 3) {
      errorGlobal.name = "Name require";
    }
    if (!value.description.trim()) {
      errorGlobal.description = "Description require";
    }
    if (!addPlatform.length) {
        errorGlobal.platforms = "Platforms require";
    }
    if (!!addPlatform.length) {
        let  data = addPlatform.map(ele => (ele.completado))
        let resul = data.find(ele=> ele === true)
        if (!resul) errorGlobal.platforms = "Platforms require";
     }
    if (!addGenres.length) {
        errorGlobal.genres = "Genres require";
    }
    if (!!addGenres.length) {
        let  data = addGenres.map(ele => (ele.completado))
        let resul = data.find(ele=> ele === true)
        if (!resul) errorGlobal.genres = "Genres require";
     }
     if (!value.released.length) {
        errorGlobal.released = "released require";
      }
      if (!value.rating.length) {
        errorGlobal.rating = "rating require";
      }
    return errorGlobal;
    }