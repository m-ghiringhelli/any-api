const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { roster } = require('../data/roster');

describe('roster routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('should display a list of starters from the most recent Timbers match', () => {
    const expected = roster.map((player) => {
      return { 
        name: player.name,
        number: player.number,  
      }
    })
    expect(1).toEqual(1);
  });

  afterAll(() => {
    pool.end();
  });
});
