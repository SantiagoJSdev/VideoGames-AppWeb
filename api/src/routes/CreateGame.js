
const { Router } = require("express");
const router = Router();
const { Videogame, Genre,  Platform } = require("../db");

router.post("/", async (req, res) => {
    let {name, description, rating, released, platform, genre, created} = req.body;

    let newGame = await Videogame.create({
        name,
        description,
        released,
        rating: rating || 1,
        created
   
    });

    let dbGenre = await Genre.findAll({
        where: { name: genre }
    });

    let dbPlatform = await Platform.findAll({
        where: { name: platform }
    });
    console.log(dbGenre)
    console.log(dbPlatform,'*')
    newGame.addGenres(dbGenre);
    newGame.addPlatforms(dbPlatform);

    res.status(200).json(newGame);

});

module.exports = router;