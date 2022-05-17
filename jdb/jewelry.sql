drop database if exists jdb;
create database jdb;
use jdb;

create table types(
    types_id tinyint auto_increment,
    type varchar(10),
    constraint pk_type_id primary key (types_id)
);

insert into types(type)values('bracelet'),('necklaces'),('earrings');

create table jewelry(
    jewelry_id smallint auto_increment,
    jewelry_name  varchar(50) not null,
    jewelry_img varchar(50) not null,
    jewelry_desc varchar(350) not null,
    jewelry_type tinyint default 1,
    jewelry_price smallint not null,
    jewelry_quantity tinyint default 1,
    jewelry_soldout boolean default false,
    constraint pk_jewelry_id primary key(jewelry_id),
    constraint fk_type_id foreign key (jewelry_type) references types(types_id)
);
