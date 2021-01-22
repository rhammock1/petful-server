const supertest = require('supertest');
const app = require('../src/app');
const { testPets } = require('./test-helpers');

describe('Pets endpoint', function() {
  describe('GET /api/pets', () => {
    it ('responds with 200 and the top value of dog and cat', () => {
      const cat = testPets.cats.displayTop();
      const dog = testPets.dogs.displayTop();
      const topPets = { cat, dog };
      return supertest(app)
        .get('/api/pets')
        .expect(200, { topPets })
    })
  })
})