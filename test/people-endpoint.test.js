const { ieNoOpen } = require('helmet');
const supertest = require('supertest');
const app = require('../src/app');
const { testPeople } = require('./test-helpers');

describe('People endpoint', function() {
  describe('GET /api/people', () => {
    it ('responds with 200 and the person first in line', () => {
      const person = testPeople.people.displayTop();
      return supertest(app)
        .get('/api/people')
        .expect(200, { person })
    })
  })
  describe('POST /api/people', () => {
    it ('responds with 201 and the name of the person added', () => {
      const name = 'Little John';
      return supertest(app)
        .post('/api/people')
        .send({ name })
        .expect(201, { person: name })
    })
  })
})