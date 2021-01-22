'use strict';

const express = require('express');
const petsRouter = express.Router();
const jsonParser = express.json();

const Pets = require('./pets-service');


petsRouter
  .route('/')
  .get((req, res, next) => {
    const topPets = Pets.getTopValue();
    res.status(200).json({ topPets });
  })

module.exports = petsRouter;