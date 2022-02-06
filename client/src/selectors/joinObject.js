
export const joinObject = (value, addGenres, addPlatform) => {


    let nameGenres = addGenres.filter(genre => genre.completado && genre.name).map(ele => ele && ele.name)
    let namePlatform = addPlatform.filter(genre => genre.completado && genre.name).map(ele => ele && ele.name)

    return {
        name: value.name,
        description: value.description,
        rating: value.rating,
        released: value.released,
        platform: namePlatform,
        genre: nameGenres
    }

};

