drop table content;
drop table page;
drop table content_type;
drop table wedding_user_role;
drop table wedding_role;
drop table wedding_user;
CREATE TABLE wedding_user
(
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(40) not null,
	last_name VARCHAR(40) not null,
	email VARCHAR(40),
	password VARCHAR(340),
	is_active BOOLEAN
);
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
CREATE TABLE template
(
	id SERIAL PRIMARY KEY,
	name VARCHAR(40) not null,
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
	template_id INTEGER NOT NULL references template(id),
	sort_order INTEGER NULL,
	parent_index INTEGER NULL,
	row_number INTEGER NOT NULL,
	column_number INTEGER NOT NULL,
	date_created TIMESTAMP null,
	is_active BOOLEAN
);
CREATE INDEX conect_page_idx ON content (page_id, is_active);

insert into content_type (name, description, is_active) values ('Image', 'Url for an Image', true);
insert into content_type (name, description, is_active) values ('Description', 'Description', true);
insert into content_type (name, description, is_active) values ('Title', 'Title', true);
insert into content_type (name, description, is_active) values ('ShortDescription', 'ShortDescription', true);
insert into content_type (name, description, is_active) values ('Link', 'Link', true);
insert into content_type (name, description, is_active) values ('Iframe', 'Iframe', true);

insert into wedding_user (first_name, last_name, email, is_active) Values ('Jason', 'Evans', 'jevans8011@gmail.com', true);

insert into page(name, description, user_id, date_created, is_active) values ('Venue', 'Venue', 1, null, true);
insert into page(name, description, user_id, date_created, is_active) values ('The Proposal', 'The Proposal', 1, null, true);
insert into page(name, description, user_id, date_created, is_active) values ('Things To Do', 'Things To Do', 1, null, true);
insert into page(name, description, user_id, date_created, is_active) values ('Photo Album', 'Photo Album', 1, null, true);
insert into page(name, description, user_id, date_created, is_active) values ('Gift Registry', 'Gift Registry', 1, null, true);
insert into page(name, description, user_id, date_created, is_active) values ('How To Get There', 'How To Get There', 1, null, true);
insert into page(name, description, user_id, date_created, is_active) values ('Bridal Party', 'Bridal Party', 1, null, true);
insert into page(name, description, user_id, date_created, is_active) values ('Accomodations', 'Accomodations', 1, null, true);

insert into template(name, is_active) values ('Basic Template', true);
insert into template(name, is_active) values ('Photo With Description', true);
insert into template(name, is_active) values ('Photo Gallery', true);
insert into template(name, is_active) values ('List', true);
insert into template(name, is_active) values ('ListGrid', true);

GRANT ALL PRIVILEGES ON TABLE content TO jevans;
GRANT USAGE, SELECT ON SEQUENCE content_id_seq TO jevans;
GRANT ALL PRIVILEGES ON TABLE wedding_user TO jevans;
GRANT USAGE, SELECT ON SEQUENCE wedding_user_id_seq TO jevans
