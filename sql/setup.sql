-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP table if exists roster;

CREATE table roster (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  name VARCHAR NOT NULL,
  number INT NOT NULL,
  position VARCHAR NOT NULL,
  age INT NOT NULL,
  country VARCHAR NOT NULL
);

INSERT INTO roster (name, number, position, age, country) VALUES
('Alijaz Ivacic', 31, 'Goalkeeper', 28, 'Slovenia'),
('Josecarlos Van Rankin', 2, 'Defender', 29, 'Mexico'),
('Larrys Mabiala', 33, 'Defender', 34, 'Congo DR'),
('Dario Zuparic', 13, 'Defender', 30, 'Croatia'),
('Justin Rasmussen', 14, 'Defender', 23, 'United States'),
('Christhian Paredes', 22, 'Midfielder', 24, 'Paraguay'),
('David Ayala', 24, 'Midfielder', 19, 'Argentina'),
('Yimmi Chara', 23, 'Midfielder', 31, 'Colombia'),
('Marvin Loria', 44, 'Midfielder', 25, 'Costa Rica'),
('Dairon Asprilla', 27, 'Forward', 30, 'Colombia'),
('Nathan Fogaca', 99, 'Forward', 23, 'Brazil');
