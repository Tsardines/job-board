CREATE DATABASE job_board;


DROP TABLE users;

CREATE TABLE users (
id BIGSERIAL PRIMARY KEY,
username VARCHAR(255) UNIQUE,
password VARCHAR(255),
favorites VARCHAR(255),
email VARCHAR(255) UNIQUE
);

DROP TABLE jobs;

CREATE TABLE jobs (
id BIGSERIAL PRIMARY KEY,
created_at date,
title VARCHAR(255) NOT NULL,
type VARCHAR(255) NOT NULL,
company VARCHAR(255) NOT NULL,
company_url VARCHAR(255),
url VARCHAR(255),
languages VARCHAR(255) NOT NULL,
frameworks VARCHAR(255) NOT NULL,
experience_level VARCHAR(255)
);

CREATE TABLE user_favs (
  id BIGSERIAL PRIMARY KEY,

)

-- INSERT INTO jobs
-- (title, type, company, languages, frameworks)
-- VALUES
-- ('Senior Dev', 'full time', 'Cianfanelli Bank', 'JS, Ruby', 'Angular, Vue');
