'use strict';

const express = require('express');
const petsRouter = express.Router();
const jsonParser = express.json();

const Pets = require('./pets-service');
const People = require('../people/people-service');

petsRouter
  .route('/')
  .get((req, res, next) => {
    const topPets = Pets.getTopValue();
    res.status(200).json({ topPets });
  })
  .delete(jsonParser, (req, res, next) => {
    const { type } = req.body;
    const adopter = People.dequeue();
    let message;
    if (!type) {
      return res.status(400).json({ error: {
        message: 'Type must be included in request body -- cats, dogs, or both'
      }});
    }
    if (type === 'both') {
      const adoptedCat = Pets.dequeue('cats');
      const adoptedDog = Pets.dequeue('dogs');
      Pets.enqueue('cats', adoptedCat);
      Pets.enqueue('dogs', adoptedDog);
      message = `Thank you, ${ adopter }, for adopting ${ adoptedCat.name }, the cat and ${ adoptedDog.name }, the dog!`
    } else {
      const editedType = type.slice(0, -1);
      const adopted = Pets.dequeue(type);
      Pets.enqueue(type, adopted);
      message = `Thank you, ${ adopter }, for adopting ${ adopted.name }, the ${ editedType }!`;
    }
    const topPets = Pets.getTopValue();
    console.log(topPets, message);
    return res.status(200).json({
      topPets,
      message
    });
    
  })

module.exports = petsRouter;