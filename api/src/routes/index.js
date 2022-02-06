const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogames = require('./VideoGames')
const create = require('./CreateGame')
const gameById = require('./GameById')
const genre= require("./GetGender")
const platform = require("./GetPlatform")
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/videogames", videogames)
router.use("/videogames", gameById);
router.use("/videogames", create);
router.use("/genres", genre);
router.use("/platform", platform);

module.exports = router;
