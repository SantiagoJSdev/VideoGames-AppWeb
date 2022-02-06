const axios = require("axios");
const { Platform } = require("../db");
const { API_KEY } = process.env;

const getAllPlatform = async (req, res) => {
    try {
        const platformsApi = await axios.get(`https://api.rawg.io/api/platforms?key=${API_KEY}`);
        const platforms = platformsApi.data.results;
        platforms.forEach(async (plat) => {
            await Platform.findOrCreate({
                where: {
                    name: plat.name,
                }
            })
        });

        const platformData = await Platform.findAll();

        res.status(200).json(platformData);
        
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAllPlatform
}