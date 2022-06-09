const { Router } = require('express');
const Player = require('../models/Player');

module.exports = Router()
  .get('/', async (req, res) => {
    const roster = await Player.getAll();
    res.json(roster);
  });
