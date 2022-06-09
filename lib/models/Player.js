const pool = require('../utils/pool');

module.exports = class Player {
  id;
  name;
  number;
  position;
  age;
  country;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.number = row.number;
    this.position = row.position;
    this.age = row.age;
    this.country = row.country;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM roster');
    const data = rows.map((row) => new Player(row));
    return data;
  }
};
