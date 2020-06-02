-- Restaurants table
drop table if exists restaurants CASCADE;
create table restaurants(
    id SERIAL primary key,
    name varchar(255),
    location varchar(255),
    image varchar(255),
    work_from varchar(255),
    work_to varchar(255)
);

insert into restaurants(name, location, image, work_from, work_to)
values ('Milk Bar', 'Shota Rustaveli st. 16', 'mb.jpg', '10.00', '22.00');

insert into restaurants(name, location, image, work_from, work_to)
values ('Evrasia', 'Shota Rustaveli st. 16', 'mb.jpg', '10.00', '22.00');

insert into restaurants(name, location, image, work_from, work_to)
values ('Aroma Kava', 'Shota Rustaveli st. 16', 'mb.jpg', '10.00', '22.00');

insert into restaurants(name, location, image, work_from, work_to)
values ('Arena', 'Shota Rustaveli st. 16', 'mb.jpg', '10.00', '22.00');

insert into restaurants(name, location, image, work_from, work_to)
values ('Ararat', 'Shota Rustaveli st. 16', 'mb.jpg', '10.00', '22.00');

-- Description Table
drop table if exists description CASCADE;
create table description(
    id int,
    restaurants_description text
);

insert into description(id, restaurants_description)
values (1, 'Very good restaurant, for good people!');

insert into description(id, restaurants_description)
values (2, 'Very good restaurant, for good people!');

insert into description(id, restaurants_description)
values (3, 'Very good restaurant, for good people!');

insert into description(id, restaurants_description)
values (4, 'Very good restaurant, for good people!');

insert into description(id, restaurants_description)
values (5, 'Very good restaurant, for good people!');

-- Users Table

drop table if exists users CASCADE;
create table users(
    id SERIAL primary key,
    phone_number varchar(255),
    password varchar(255),
    email varchar(255),
    user_name varchar(255)
);

insert into users(phone_number, password, email, user_name)
values ('+380973643131', 'nazar1997', 'bidaritter1997@gmail.com', 'Nazarii');

insert into users(phone_number, password, email, user_name)
values ('+380973643132', 'olha2020', 'щдрф@gmail.com', 'Olha');


-- Images Table

drop table if exists images_1 CASCADE;
create table images_1(
    id SERIAL primary key,
    name varchar(255)
);

insert into images_1(name)
values ('index2.jpg');
insert into images_1(name)
values ('index2.jpg');
insert into images_1(name)
values ('index2.jpg');
insert into images_1(name)
values ('index2.jpg');


drop table if exists images_2 CASCADE;
create table images_2(
    id SERIAL primary key,
    name varchar(255)
);

insert into images_2(name)
values ('index2.jpg');
insert into images_2(name)
values ('index2.jpg');
insert into images_2(name)
values ('index2.jpg');
insert into images_2(name)
values ('index2.jpg');


drop table if exists images_3 CASCADE;
create table images_3(
    id SERIAL primary key,
    name varchar(255)
);

insert into images_3(name)
values ('index2.jpg');
insert into images_3(name)
values ('index2.jpg');
insert into images_3(name)
values ('index2.jpg');
insert into images_3(name)
values ('index2.jpg');


drop table if exists images_4 CASCADE;
create table images_4(
    id SERIAL primary key,
    name varchar(255)
);

insert into images_4(name)
values ('index2.jpg');
insert into images_4(name)
values ('index2.jpg');
insert into images_4(name)
values ('index2.jpg');
insert into images_4(name)
values ('index2.jpg');


drop table if exists images_5 CASCADE;
create table images_5(
    id SERIAL primary key,
    name varchar(255)
);


insert into images_5(name)
values ('index2.jpg');
insert into images_5(name)
values ('index2.jpg');
insert into images_5(name)
values ('index2.jpg');
insert into images_5(name)
values ('index2.jpg');

--Menu Restaurant Table


drop table if exists menu_1 CASCADE;
create table menu_1(
    dish_id SERIAL primary key,
    category_id int,
    name varchar(255),
    price int
);

insert into menu_1(category_id, name, price)
values (1, 'Misosup', 50);
insert into menu_1(category_id, name, price)
values (1, 'Mashrum', 60);
insert into menu_1(category_id, name, price)
values (2, 'Grecha', 70);
insert into menu_1(category_id, name, price)
values (2, 'Poteto', 80);
insert into menu_1(category_id, name, price)
values (3, 'Pig', 90);
insert into menu_1(category_id, name, price)
values (3, 'Chicken', 100);

drop table if exists menu_2 CASCADE;
create table menu_2(
    dish_id SERIAL primary key,
    category_id int,
    name varchar(255),
    price int
);

insert into menu_2(category_id, name, price)
values (1, 'Misosup', 60);
insert into menu_2(category_id, name, price)
values (1, 'Mashrum', 60);
insert into menu_2(category_id, name, price)
values (2, 'Grecha', 60);
insert into menu_2(category_id, name, price)
values (2, 'Poteto', 60);
insert into menu_2(category_id, name, price)
values (3, 'Pig', 60);
insert into menu_2(category_id, name, price)
values (3, 'Chicken', 60);

drop table if exists menu_3 CASCADE;
create table menu_3(
    dish_id SERIAL primary key,
    category_id int,
    name varchar(255),
    price int
);

insert into menu_3(category_id, name, price)
values (1, 'Misosup', 60);
insert into menu_3(category_id, name, price)
values (1, 'Mashrum', 60);
insert into menu_3(category_id, name, price)
values (2, 'Grecha', 60);
insert into menu_3(category_id, name, price)
values (2, 'Poteto', 60);
insert into menu_3(category_id, name, price)
values (3, 'Pig', 60);
insert into menu_3(category_id, name, price)
values (3, 'Chicken', 60);


drop table if exists menu_4 CASCADE;
create table menu_4(
    dish_id SERIAL primary key,
    category_id int,
    name varchar(255),
    price int
);

insert into menu_4(category_id, name, price)
values (1, 'Misosup', 60);
insert into menu_4(category_id, name, price)
values (1, 'Mashrum', 60);
insert into menu_4(category_id, name, price)
values (2, 'Grecha', 60);
insert into menu_4(category_id, name, price)
values (2, 'Poteto', 60);
insert into menu_4(category_id, name, price)
values (3, 'Pig', 60);
insert into menu_4(category_id, name, price)
values (3, 'Chicken', 60);

drop table if exists menu_5 CASCADE;
create table menu_5(
    dish_id SERIAL primary key,
    category_id int,
    name varchar(255),
    price int
);

insert into menu_5(category_id, name, price)
values (1, 'Misosup', 60);
insert into menu_5(category_id, name, price)
values (1, 'Mashrum', 60);
insert into menu_5(category_id, name, price)
values (2, 'Grecha', 60);
insert into menu_5(category_id, name, price)
values (2, 'Poteto', 60);
insert into menu_5(category_id, name, price)
values (3, 'Pig', 60);
insert into menu_5(category_id, name, price)
values (3, 'Chicken', 60);


-- Categories Table


drop table if exists categories CASCADE;
create table categories(
    category_id SERIAL primary key,
    name varchar(255)
);

insert into categories(name)
values ('Hot Dishes');
insert into categories(name)
values ('Garnirs');
insert into categories(name)
values ('Meat');


-- ForgotPassword Table

drop table if exists forgot_password CASCADE;
create table forgot_password(
    email varchar(255),
    code int
);


-- Restaurant Orders Table


drop table if exists restaurant_orders_1 CASCADE;
create table restaurant_orders_1(
    id SERIAL primary key,
    user_id int,
    date timestamp,
    peopleAmount int
);

drop table if exists restaurant_orders_2 CASCADE;
create table restaurant_orders_2(
    id SERIAL primary key,
    user_id int,
    date timestamp,
    peopleAmount int
);

drop table if exists restaurant_orders_3 CASCADE;
create table restaurant_orders_3(
    id SERIAL primary key,
    user_id int,
    date timestamp,
    peopleAmount int
);

drop table if exists restaurant_orders_4 CASCADE;
create table restaurant_orders_4(
    id SERIAL primary key,
    user_id int,
    date timestamp,
    peopleAmount int
);

drop table if exists restaurant_orders_5 CASCADE;
create table restaurant_orders_5(
    id SERIAL primary key,
    user_id int,
    date timestamp,
    peopleAmount int
);

insert into restaurant_orders_5(user_id, date, peopleAmount)
values (2, '2020-06-02 22:10', 3);

select *from restaurant_orders_1;
