drop database DEMO;
create database DEMO;
use DEMO;

create table USER (
	ID		 	int(10) NOT NULL AUTO_INCREMENT, 
	USER_NAME 	varchar(255) NOT NULL, 
	PASSWORD 	varchar(255) NOT NULL, 
	IS_ADMIN	smallint(1) NOT NULL DEFAULT 0,
	UNIQUE		UQ_USER_1 (USER_NAME),
	PRIMARY KEY(ID)
);

insert into USER (USER_NAME, PASSWORD, IS_ADMIN) values ('Admin', 'password', 1);
insert into USER (USER_NAME, PASSWORD, IS_ADMIN) values ('FooBar', 'password', 0);
