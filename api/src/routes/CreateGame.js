
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
    // findAll con este metodo puedo leer toda la tabla de la base de datos
    // y con La where  filtro la consulta por genre que le pase.
    let dbGenre = await Genre.findAll({
        where: { name: [...genre] }
    });

    let dbPlatform = await Platform.findAll({
        where: { name: [...platform] }
    });

// https://sequelize.org/v7/class/src/associations/belongs-to-many.js~BelongsToMany.html#instance-method-add
    newGame.addGenres(dbGenre);
    newGame.addPlatforms(dbPlatform);

    res.status(200).json(newGame);

    // Puede eliminar una instancia llamando a .destroy()
});

module.exports = router;