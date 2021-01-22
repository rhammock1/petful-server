'use strict';

const express = require('express');
const peopleRouter = express.Router();
const jsonParser = express.json();
const People = require('./people-service');

peopleRouter
  .route('/')
  .get((req, res, next) => {
    const person = People.getTopValue();
    res.status(200).json({ person });
  })
  .post(jsonParser, (req, res, next) => {
    const { name } = req.body;
    const person = People.enqueue(name);
    res.status(201).json({ person });
  })

  module.exports = peopleRouter;
