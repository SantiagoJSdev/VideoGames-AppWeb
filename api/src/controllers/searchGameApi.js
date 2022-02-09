const axios = require("axios");
const { API_KEY } = process.env;



const searchGameApi = async (req, res) => {

    const {name} = req.query;

    let url = `https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`

    try {
        const searchApi = await axios.get(url);
        const game = searchApi.data.results;
        
        res.status(200).json(game);
        
    } catch (error) {
        console.log(error);
    }

};

module.exports = {
    searchGameApi
}