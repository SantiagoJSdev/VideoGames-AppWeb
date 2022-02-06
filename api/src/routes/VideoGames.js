const { Router } = require("express");
const router = Router();
const {  joinDataBase } = require('../controllers/videoGamesControllers')



router.get('/', async (req, res) => {
    const {name} = req.query;
    // console.log(name.length)

    try {
      
    let total = await joinDataBase()
    // if (name.length === 0){
    //   res.status(404).json({ msg: "name not found" });
    // } 
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
} catch (error) {
      res.status(404).json({ error: "name not found" })
}
  
})


module.exports = router;