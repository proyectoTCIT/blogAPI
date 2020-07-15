create database prueba;
/c prueba;
create table posts(
    ID  SERIAL PRIMARY KEY,
    name varchar(50),
    description varchar(200)
);
insert into posts(name,description) values
    ('post1', 'descripcion1');