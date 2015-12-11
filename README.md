# wedding

Jenna and Jason's wedding

How to run the app locally:

1) Open terminal window, run "gulp"
2) Open second terminal window, run "npm run watch"
3) run brew install postgresql to download postgresql
	note: run the following command if homebrew is not installed:
		ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
	note: if getting the error "pg_config command not found" then trying running this command, but make sure you have the correct location for PostgresSQL:
		export PATH=/Library/PostgreSQL/9.3/bin:$PATH
4) open application postgresql and run the following command to connect to wedding database:
	"\connect wedding"
5) Run the following script in psql to create the database and necessary tables:

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
CREATE TABLE wedding_user (Id SERIAL PRIMARY KEY, FirstName VARCHAR(40) not null, LastName VARCHAR(40) not null, Email VARCHAR(40), IsActive BOOLEAN);
CREATE TABLE wedding_role (Id SERIAL PRIMARY KEY, Name VARCHAR(40) not null, IsActive BOOLEAN);
CREATE TABLE wedding_user_role(Id SERIAL PRIMARY KEY, UserId INTEGER not null references wedding_user(Id), RoleId INTEGER not null references wedding_role (Id), IsActive BOOLEAN);
CREATE TABLE page
(
	Id SERIAL PRIMARY KEY,
	Name VARCHAR(40) not null,
	Description VARCHAR(840) null,
	UserId INTEGER NULL references wedding_user(Id), 	
	DateCreated TIMESTAMP null,
	IsActive BOOLEAN
);
CREATE TABLE content_type
(
	Id SERIAL PRIMARY KEY,
	Name VARCHAR(40) not null,
	Description VARCHAR(840) null,
	IsActive BOOLEAN
);
CREATE TABLE content
(
	Id SERIAL PRIMARY KEY,
	Name VARCHAR(40) not null,
	Value VARCHAR(840) null,
	PageId INTEGER NOT NULL references page(Id),
	ContentTypeId INTEGER NOT NULL references content_type(Id),
	UserId INTEGER NULL references wedding_user(Id),
	SortOrder INTEGER NULL,
	parentIndex INTEGER NULL,
	DateCreated TIMESTAMP null,
	IsActive BOOLEAN
);
CREATE INDEX conect_page_idx ON content (PageId, IsActive);

insert into content_type (Name, Description, IsActive) values ('Image', 'Url for an Image', true);
insert into content_type (Name, Description, IsActive) values ('Description', 'Description', true);
insert into content_type (Name, Description, IsActive) values ('Title', 'Title', true);
insert into content_type (Name, Description, IsActive) values ('ShortDescription', 'ShortDescription', true);

insert into wedding_user (FirstName, LastName, Email, IsActive) Values ('Jason', 'Evans', 'jevans8011@gmail.com', true);

insert into page(Name, Description, UserId, DateCreated, IsActive) values ('Venue', 'Venue', 1, null, true);
insert into page(Name, Description, UserId, DateCreated, IsActive) values ('The Proposal', 'The Proposal', 1, null, true);

-------------------------------------------------------------------------------------------------------------------

Note: reference this article for concepts used in this app:
http://sahatyalkabov.com/create-a-character-voting-app-using-react-nodejs-mongodb-and-socketio/
