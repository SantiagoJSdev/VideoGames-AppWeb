const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogames = require('./VideoGames')
const create = require('./CreateGame')
const gameById = require('./GameById')
const gender= require("./GetGender")
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/videogames", videogames)
router.use("/videogames", gameById);
router.use("/videogames", create);
router.use("/genres", gender);


module.exports = router;
