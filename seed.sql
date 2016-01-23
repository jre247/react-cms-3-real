drop table content;
drop table page;
drop table content_type;
drop table wedding_user_role;
drop table wedding_role;
drop table wedding_user;
drop table template;
drop table app_settings;
CREATE TABLE app_setting
(
	id SERIAL PRIMARY KEY,
	name VARCHAR(40) not null,
	value VARCHAR(840) not null,
	is_active BOOLEAN
);
CREATE TABLE wedding_user
(
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(40) not null,
	last_name VARCHAR(40) not null,
	email VARCHAR(40),
	password VARCHAR(340),
	is_active BOOLEAN
);
CREATE TABLE template
(
	id SERIAL PRIMARY KEY,
	name VARCHAR(40) not null,
	is_active BOOLEAN
);
CREATE TABLE page
(
	id SERIAL PRIMARY KEY,
	name VARCHAR(40) not null,
	description VARCHAR(840) null,
	url VARCHAR(240) null,
	user_id INTEGER NULL references wedding_user(id),
	date_created TIMESTAMP null,
	template_id INTEGER NOT NULL references template(id),
	sort_order INTEGER NOT NULL,
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
	row_number INTEGER NOT NULL,
	column_number INTEGER NOT NULL,
	date_created TIMESTAMP null,
	is_active BOOLEAN
);
CREATE INDEX conect_page_idx ON content (page_id, is_active);

CREATE TABLE wedding_role
(
	id SERIAL PRIMARY KEY,
	name VARCHAR(40) not null,
	description VARCHAR(240) not null,
	is_active BOOLEAN
);

CREATE TABLE wedding_user_role
(
	id SERIAL PRIMARY KEY,
	user_id INTEGER NOT NULL references wedding_user(id),
	role_id INTEGER NOT NULL references wedding_role(id),
	is_active BOOLEAN
);
CREATE INDEX conect_user_permission_idx ON wedding_user_role (user_id);

insert into app_setting (name, value, is_active) values ('Background Image', 'http://passcdn-cf1.pass.us/bKn1Z1557788/fDjB1266150348l.jpg', true);
insert into wedding_role (name, description, is_active) values ('Publisher', 'Publish Content', true);
insert into wedding_role (name, description, is_active) values ('Admin', 'Full control', true);

insert into content_type (name, description, is_active) values ('Image', 'Url for an Image', true);
insert into content_type (name, description, is_active) values ('Description', 'Description', true);
insert into content_type (name, description, is_active) values ('Title', 'Title', true);
insert into content_type (name, description, is_active) values ('ShortDescription', 'ShortDescription', true);
insert into content_type (name, description, is_active) values ('Link', 'Link', true);
insert into content_type (name, description, is_active) values ('Iframe', 'Iframe', true);

insert into wedding_user (first_name, last_name, email, password, is_active) Values ('Jason', 'Evans', 'jevans8011@gmail.com', '$2a$08$vq.A/nFxWWGYceljbK.Ct.5X/dN.0.VsvXsSsF8O58ckkVfqE/8n2', true);
insert into wedding_user (first_name, last_name, email, password, is_active) Values ('Jason', 'Evans', 't1', '$2a$08$vq.A/nFxWWGYceljbK.Ct.5X/dN.0.VsvXsSsF8O58ckkVfqE/8n2', true);

insert into wedding_user_role (user_id, role_id, is_active) Values (1, 2, true);
insert into wedding_user_role (user_id, role_id, is_active) Values (2, 2, true);

insert into template(name, is_active) values ('Basic Template', true);
insert into template(name, is_active) values ('Photo Gallery', true);
insert into template(name, is_active) values ('List', true);
insert into template(name, is_active) values ('ListGrid', true);

insert into page(name, description, url, user_id, date_created, template_id, sort_order, is_active) values ('Venue', 'Venue', 'venue', 1, null, 1, 0, true);
insert into page(name, description, url, user_id, date_created, template_id, sort_order, is_active) values ('The Proposal', 'The Proposal', 'our-story', 1, null, 1, 1, true);
insert into page(name, description, url, user_id, date_created, template_id, sort_order, is_active) values ('Things To Do', 'Things To Do', 'things-to-do', 1, null, 3, 2, true);
insert into page(name, description, url, user_id, date_created, template_id, sort_order, is_active) values ('Photo Album', 'Photo Album', 'photo-album', 1, null, 2, 3, true);
insert into page(name, description, url, user_id, date_created, template_id, sort_order, is_active) values ('Gift Registry', 'Gift Registry', 'gift-registry', 1, null, 3, 4, true);
insert into page(name, description, url, user_id, date_created, template_id, sort_order, is_active) values ('How To Get There', 'How To Get There', 'how-to-get-there', 1, null, 3, 5, true);
insert into page(name, description, url, user_id, date_created, template_id, sort_order, is_active) values ('Bridal Party', 'Bridal Party', 'bridal-party', 1, null, 4, 6, true);
insert into page(name, description, url, user_id, date_created, template_id, sort_order, is_active) values ('Accomodations', 'Accomodations', 'accomodations', 1, null, 3, 7, true);

GRANT ALL PRIVILEGES ON TABLE content TO jevans;
GRANT USAGE, SELECT ON SEQUENCE content_id_seq TO jevans;
GRANT ALL PRIVILEGES ON TABLE wedding_user TO jevans;
GRANT USAGE, SELECT ON SEQUENCE wedding_user_id_seq TO jevans;
GRANT ALL PRIVILEGES ON TABLE wedding_user_role TO jevans;
GRANT USAGE, SELECT ON SEQUENCE wedding_user_role_id_seq TO jevans;
GRANT ALL PRIVILEGES ON TABLE page TO jevans;
GRANT USAGE, SELECT ON SEQUENCE page_id_seq TO jevans;
GRANT ALL PRIVILEGES ON TABLE template TO jevans;
GRANT USAGE, SELECT ON SEQUENCE template_id_seq TO jevans;
GRANT ALL PRIVILEGES ON TABLE app_setting TO jevans;
GRANT USAGE, SELECT ON SEQUENCE app_setting_id_seq TO jevans;
