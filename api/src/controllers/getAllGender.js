const axios = require('axios');
const { Genre } = require("../db");
const { API_KEY } = process.env;


const getAllGender = async (req, res) => {
    
    try{
        const url = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
        const nameGender = url.data.results;

        nameGender.forEach(async (gende) => {
            // busca o crea
            await Genre.findOrCreate({
                where: {
                    name: gende.name,
                }
            })
        });

        const allGender = await Genre.findAll();

        res.status(200).json(allGender);

    }catch(e){
        console.log(e)
    }
}

module.exports = {
    getAllGender
}

 
  
    
