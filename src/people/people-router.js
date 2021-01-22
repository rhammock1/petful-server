'use strict';

const express = require('express');
const peopleRouter = express.Router();
const jsonParser = express.json();
const People = require('./people-service');

peopleRouter
  .route('/')
  .get((req, res, next) => {
    const topPerson = People.getTopValue();
    res.status(200).json({ topPerson });
  })

  module.exports = peopleRouter;
