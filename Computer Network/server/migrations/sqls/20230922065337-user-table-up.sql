CREATE TABLE IF NOT EXISTS users (
  id              SERIAL PRIMARY KEY ,
  firstname       VARCHAR(60) NOT NULL,
  lastname        VARCHAR(60) NOT NULL,
  password        VARCHAR(60) NOT NULL
);