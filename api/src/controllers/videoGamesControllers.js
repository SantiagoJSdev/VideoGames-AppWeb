const { Videogame, Genre, Platform } = require("../db");
const axios = require("axios");
const { API_KEY, URL_API } = process.env;


 const getData = async() => {

    let apiData = []; 

    const data1 = await axios.get(`${URL_API}${API_KEY}&page=1`)
    const data2 = await axios.get(`${URL_API}${API_KEY}&page=2`)
    const data3 = await axios.get(`${URL_API}${API_KEY}&page=3`)
    const data4 = await axios.get(`${URL_API}${API_KEY}&page=4`)
    const data5 = await axios.get(`${URL_API}${API_KEY}&page=5`)

    apiData = data1.data.results.concat(
        data2.data.results,
        data3.data.results,
        data4.data.results,
        data5.data.results)

    apiData = apiData.map(game => {
        const platforms = game.platforms.map(p => p.platform)
        return {
            id: game.id,
            name: game.name,
            image: game.background_image,
            rating: game.rating,
            released: game.released,
            genres: game.genres,
            platforms: platforms,
            }
    })
 
    return apiData

}

const baseData = async() => {
    
    return await Videogame.findAll({
        include: [Genre, Platform]
    })
}

const  joinDataBase = async() => {
    let dataNew = []

    const getApi = await getData()
    const getBaseDate = await baseData()
   
  

    dataNew = getApi.concat(getBaseDate)
    return dataNew;

}

module.exports = {
    baseData,
    getData,
    joinDataBase
};