const { Router } = require("express");
const router = Router();
const axios = require("axios");

const { Videogame, Platform, Genre } = require("../db");
const { API_KEY } = process.env;




 router.get("/:id", async (req, res) => {
  const { id } = req.params;
  
  try {
    if (id.includes("-")) { //detectar UUID en DB
      const gameDataBase = await Videogame.findOne({
        where: { id },
        include: [Genre, Platform],
      });
      return res.json(gameDataBase);
    }

    const api = await axios.get(
      `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
    );
    res.json(api.data);
  } catch (err) {
    res.status(404).json({ error: "Id not found" });
  }
});

module.exports = router;