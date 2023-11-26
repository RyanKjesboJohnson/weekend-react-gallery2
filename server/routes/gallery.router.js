const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  const idOfDog = req.params.id;
  console.log(idOfDog);
  const sqlText = 
    `
    UPDATE gallery
    SET "likes" = "likes" + 1
    WHERE id = $1;
    `

  const sqlValues = [
    idOfDog
  ]

  pool.query(sqlText, sqlValues)
    .then ((results) => {
      res.sendStatus(200)
    }).catch ((error) => {
      res.sendStatus(500)
    })
  }
);

// GET /gallery
router.get('/', (req, res) => {
  const sqlText = 
    `
    SELECT * FROM gallery
    ORDER BY "title";
    `

  pool.query(sqlText)
  .then ((result) => {
    console.log(result.rows)
    res.send(result.rows)
  }) .catch ((error) => {
    console.log(error)
    res.send(500)
  })
});

module.exports = router;
