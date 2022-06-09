const { Router } = require('express');
const Player = require('../models/Player');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const player = await Player.getById(id);
    return res.json(player);
  })
  .get('/', async (req, res) => {
    const roster = await Player.getAll();
    res.json(roster);
  });
