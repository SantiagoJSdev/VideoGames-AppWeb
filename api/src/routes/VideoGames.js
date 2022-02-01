const { Router } = require("express");
const router = Router();
const { getData, baseData, joinDataBase } = require('../controllers/videoGamesControllers')



router.get('/', async (req, res) => {
    const {name} = req.query;
    let total = await joinDataBase()

    if (name) {
        let game = total.filter((game) =>
          game.name.toLowerCase().includes(name.toLowerCase())
        );
    
    (game.length)
      ? res.status(200).send(game)
      : res.status(404).json({ msg: "Game not Found" });
  } else {
    res.status(200).json(total);
  }
  
})


module.exports = router;