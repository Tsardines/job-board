CREATE DATABASE job_board;

\c job_board

CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  username VARCHAR(255),
  password VARCHAR(255),
  favorites VARCHAR(255),
  email VARCHAR(255),
  repeat_user boolean
);

DROP TABLE jobs;

CREATE TABLE git_jobs (
  id BIGSERIAL PRIMARY KEY,
  created_at VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  type VARCHAR(255) NOT NULL,
  company VARCHAR(255) NOT NULL,
  company_url VARCHAR(255) NOT NULL,
  url VARCHAR(255) NOT NULL
);

  -- languages VARCHAR(255) NOT NULL,
  -- frameworks VARCHAR(255) NOT NULL,
  -- favorited boolean
