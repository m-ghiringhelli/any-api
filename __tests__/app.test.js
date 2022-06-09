const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { roster } = require('../data/roster');

describe('roster routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('should display a list of starters from the most recent Timbers match', async () => {
    const res = await request(app).get('/roster');
    const expected = roster.map((player) => {
      return { 
        id: player.id,
        name: player.name,
        number: player.number,
        position: player.position,
        age: player.age,
        country: player.country
      };
    });
    expect(res.body).toEqual(expected);
  });

  afterAll(() => {
    pool.end();
  });
});
