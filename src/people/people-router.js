'use strict';

const express = require('express');
const peopleRouter = express.Router();
const jsonParser = express.json();
const People = require('./people-service');

peopleRouter
  .route('/')
  .get((req, res, next) => {
    const person = People.getTopValue();
    const people = People.getAllValue();
    res.status(200).json({ person, people });
  })
  .post(jsonParser, (req, res, next) => {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: {
        message: 'Name must be included in the request body - name: personName'
      }});
    }
    if (!(/^[A-Za-z\s]+$/.test(name))) {
      return res.status(400).json({ error: {
        message: 'Name must only be letters and spaces'
      }});
    }
    const person = People.enqueue(name);
    res.status(201).json({ person });
  })

  module.exports = peopleRouter;
