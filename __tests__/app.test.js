const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const roster = [
  {
    name: 'Alijaz Ivacic',
    number: 31,
    position: 'Goalkeeper',
    age: 28, 
    country: 'Slovenia'
  },
  {
    name: 'Josecarlos Van Rankin',
    number: 2,
    position: 'Defender',
    age: 29,
    country: 'Mexico'
  },
  {
    name: 'Larrys Mabiala',
    number: 33,
    position: 'Defender',
    age: 34,
    country: 'Congo DR'
  },
  {
    name: 'Dario Zuparic',
    number: 13,
    position: 'Defender',
    age: 30,
    country: 'Croatia'
  },
  {
    name: 'Justin Rasmussen',
    number: 14,
    position: 'Defender',
    age: 23,
    country: 'United States'
  },
  {
    name: 'Christhian Paredes',
    number: 22,
    position: 'Midfielder',
    age: 24,
    country: 'Paraguay'
  },
  {
    name: 'David Ayala',
    number: 24,
    position: 'Midfielder',
    age: 19,
    country: 'Argentina'
  },
  {
    name: 'Yimmi Chara',
    number: 23,
    position: 'Midfielder',
    age: 31,
    country: 'Colombia'
  },
  {
    name: 'Marvin Loria',
    number: 44,
    position: 'Midfielder',
    age: 25,
    country: 'Costa Rica'
  },
  {
    name: 'Dairon Asprilla',
    number: 27,
    position: 'Forward',
    age: 30,
    country: 'Colombia'
  },
  {
    name: 'Nathan Fogaca',
    number: 99,
    position: 'Forward',
    age: 23,
    country: 'Brazil'
  },
]

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('example test - delete me!', () => {
    expect(1).toEqual(1);
  });
  afterAll(() => {
    pool.end();
  });
});
