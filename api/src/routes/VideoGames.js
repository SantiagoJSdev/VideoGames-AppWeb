const { Router } = require("express");
const router = Router();
const { getData, baseData, joinDataBase } = require('../controllers/videoGamesControllers')



router.get('/', async (req, res) => {
    const {name} = req.query;
    let total = await joinDataBase()
   
    
    res.status(200).json(total)
})


module.exports = router;