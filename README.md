# wedding

Jenna and Jason's wedding

How to run the app locally:

1) Open terminal window, run "gulp"
2) Open second terminal window, run "npm run watch"

Run the following script in psql to create the database and necessary tables:

CREATE USER Jason WITH PASSWORD 'jj1108jj';
CREATE DATABASE Wedding;
GRANT ALL PRIVILEGES ON DATABASE Wedding to Jason;
DROP SCHEMA IF EXISTS venue;
DROP SCHEMA IF EXISTS wedding_user_role;
DROP SCHEMA IF EXISTS wedding_user;
DROP SCHEMA IF EXISTS wedding_role;
CREATE TABLE wedding_user (Id SERIAL PRIMARY KEY, Name VARCHAR(40) not null, IsActive BOOLEAN);
CREATE TABLE wedding_role (Id SERIAL PRIMARY KEY, Name VARCHAR(40) not null, IsActive BOOLEAN);
CREATE TABLE wedding_user_role(Id SERIAL PRIMARY KEY, UserId INTEGER not null references wedding_user(Id), RoleId INTEGER not null references wedding_role (Id), IsActive BOOLEAN);
CREATE TABLE venue
(
	Id SERIAL PRIMARY KEY,
	Name VARCHAR(40) not null,
	Description VARCHAR(40) null,
	CeremonyTime VARCHAR(40) null,
	Url VARCHAR(140) null,
	UserId INTEGER NULL references wedding_user(Id), 	
	DateCreated TIMESTAMP null,
	DateModified TIMESTAMP null,
	IsActive BOOLEAN
);
