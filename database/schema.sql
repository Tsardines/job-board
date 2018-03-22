CREATE DATABASE job_board;

\c job_board

CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  username VARCHAR(255),
  password VARCHAR(255),
  favorites VARCHAR(255),
  email VARCHAR(255)
);

CREATE TABLE jobs (
  id BIGSERIAL PRIMARY KEY,
  languages VARCHAR(255) NOT NULL,
  frameworks VARCHAR(255) NOT NULL,
  full_part_int VARCHAR(255) NOT NULL,
  company_type VARCHAR(255) NOT NULL,
  experience_level VARCHAR(255) NOT NULL,
  favorited boolean
);
