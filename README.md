# wedding

Jenna and Jason's wedding website

------------------------------------------------------------------------------------------------

Windows Install Instructions:

1) Download PostgresSQL for Windows and install
2) run this command to set up where Postgres SQL Data is saved:
		initdb.exe <directory for postgres data>
3) run this command:
		cd "C:\Program Files\PostgreSQL\9.5\bin"
4) run this command:
		pg_ctl -D "C:\PostgresData" -l logfile start
5) you should see a message saying the server has started
6) run this script in postgres admin to give privileges to tables to user jevans:
		GRANT ALL PRIVILEGES ON TABLE content TO jevans;
		GRANT USAGE, SELECT ON SEQUENCE content_id_seq TO jevans;

------------------------------------------------------------------------------------------------

Mac OSX install instructions:

1) Open terminal window, run "gulp"
2) Open second terminal window, run "npm run watch"
3) run brew install postgresql to download postgresql
	note: run the following command if homebrew is not installed:
		ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
	note: if getting the error "pg_config command not found" then trying running this command, but make sure you have the correct location for PostgresSQL:
		export PATH=/Library/PostgreSQL/9.3/bin:$PATH
4) open application postgresql and run the following command to connect to wedding database:
	"\connect wedding"

------------------------------------------------------------------------------------------------

Run the following script in psql to create the database and necessary tables:

CREATE USER Jason WITH PASSWORD 'jj1108jj';
CREATE DATABASE Wedding;
GRANT ALL PRIVILEGES ON DATABASE Wedding to Jason;

6) run the following psql script below to create tables and some data

drop table content;
drop table page;
drop table content_type;
drop table wedding_user_role;
drop table wedding_role;
drop table wedding_user;
CREATE TABLE wedding_user (id SERIAL PRIMARY KEY, first_name VARCHAR(40) not null, last_name VARCHAR(40) not null, email VARCHAR(40), is_active BOOLEAN);
CREATE TABLE wedding_role (id SERIAL PRIMARY KEY, name VARCHAR(40) not null, is_active BOOLEAN);
CREATE TABLE wedding_user_role(id SERIAL PRIMARY KEY, user_id INTEGER not null references wedding_user(id), role_id INTEGER not null references wedding_role (id), is_active BOOLEAN);
CREATE TABLE page
(
	id SERIAL PRIMARY KEY,
	name VARCHAR(40) not null,
	description VARCHAR(840) null,
	user_id INTEGER NULL references wedding_user(id), 	
	date_created TIMESTAMP null,
	is_active BOOLEAN
);
CREATE TABLE content_type
(
	id SERIAL PRIMARY KEY,
	name VARCHAR(40) not null,
	description VARCHAR(840) null,
	is_active BOOLEAN
);
CREATE TABLE content
(
	id SERIAL PRIMARY KEY,
	name VARCHAR(40) not null,
	value VARCHAR(840) null,
	page_id INTEGER NOT NULL references page(id),
	content_type_id INTEGER NOT NULL references content_type(id),
	user_id INTEGER NULL references wedding_user(id),
	sort_order INTEGER NULL,
	parent_index INTEGER NULL,
	date_created TIMESTAMP null,
	is_active BOOLEAN
);
CREATE INDEX conect_page_idx ON content (page_id, is_active);

insert into content_type (name, description, is_active) values ('Image', 'Url for an Image', true);
insert into content_type (name, description, is_active) values ('Description', 'Description', true);
insert into content_type (name, description, is_active) values ('Title', 'Title', true);
insert into content_type (name, description, is_active) values ('ShortDescription', 'ShortDescription', true);
insert into content_type (name, description, is_active) values ('Link', 'Link', true);

insert into wedding_user (first_name, last_name, email, is_active) Values ('Jason', 'Evans', 'jevans8011@gmail.com', true);

insert into page(name, description, user_id, date_created, is_active) values ('Venue', 'Venue', 1, null, true);
insert into page(name, description, user_id, date_created, is_active) values ('The Proposal', 'The Proposal', 1, null, true);
insert into page(name, description, user_id, date_created, is_active) values ('Things To Do', 'Things To Do', 1, null, true);
insert into page(name, description, user_id, date_created, is_active) values ('Photo Album', 'Photo Album', 1, null, true);
-------------------------------------------------------------------------------------------------------------------

Note: reference this article for concepts used in this app:
http://sahatyalkabov.com/create-a-character-voting-app-using-react-nodejs-mongodb-and-socketio/
