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

  it('should fetch a player by id and display their info', async () => {
    const res = await request(app).get('/roster/8');
    const yimmi = {
      id: '8',
      name: 'Yimmi Chara',
      number: 23,
      position: 'Midfielder',
      age: 31,
      country: 'Colombia'
    };
    expect(res.body).toEqual(yimmi);
  });

  afterAll(() => {
    pool.end();
  });
});
