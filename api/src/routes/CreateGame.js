
const { Router } = require("express");
const router = Router();
const { Platform, Videogame, Gender } = require("../db");

router.post("/", async (req, res) => {
    let {name, description, rating, releaseDate, platforms, gender, created} = req.body;

    let newGame = await Videogame.create({
        name,
        description,
        releaseDate,
        rating: rating || 1,
        created
   
    });

    let dbGenre = await Gender.findAll({
        where: { name: gender }
    });

    let dbPlatform = await Platform.findAll({
        where: { name: platforms }
    });

    newGame.addGenders(dbGenre);
    newGame.addPlatforms(dbPlatform);

    res.status(200).json(newGame);

});

module.exports = router;