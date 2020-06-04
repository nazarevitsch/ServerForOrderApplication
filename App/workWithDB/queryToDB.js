const selectAllRestaurants = 'SELECT * FROM restaurants';
const searchUserByEmailPassword = (email, pass) => {
    return(
    `select * from users\n` +
    `where email = '${email}'\n` +
    `and password = '${pass}'`
    );
};
const addUser = (phone, pass, email, username) => {
    return(
        `insert into users(phone_number, password, email, user_name)` +
        `values ('${phone}', '${pass}', '${email}', '${username}');`
    );
};
const userAlreadyExist = (email, phone) => {
  return(
      `select * from users\n` +
      `where email = '${email}' or phone_number = '${phone}';`
  );
};
const getMenu = (id) => {
    return(
        `select * from menu_${id}`
    );
};

const getAllCategories = () => {
    return(
        `select * from categories`
    );
};

const getAllImages = (id) => {
    return(
        `select * from images_${id}`
    );
};

const getRestaurantByIdWithDescription = (id) => {
    return(
        `select r.name, r.id, r.image as main_image, r.location, r.work_from, r.work_to, d.restaurants_description as description from restaurants r\n` +
        `join description d on r.id = d.id\n` +
        `where r.id = ${id}`
    );
};

const forgotPassword1 = (login, code) => {
    return(
        `insert into forgot_password(email, code)\n` +
    `values ('${login}', ${code});`
    )
};
const forgotPassword2 = (login, code) => {
    return(
        `select * from forgot_password\n` +
        `where email = '${login}' and code = ${Number(code)}`
    )
};
const deleteFromForgotPassword = (mail) => {
    return(
        `delete from forgot_password where email = '${mail}'`
    );
};
const updatePasswordForUser = (email, password) => {
    return(
        `update users\n` +
        `set password = '${password}'\n` +
        `where email = '${email}'`
    );
};
const searchUserByEmail = (email) => {
    return(
        `select * from users\n` +
        `where email = '${email}'`
    );
};
const selectAllCategories = 'select * from categories';

const selectAllDishesRestaurantByFilters = (id, filter) => {
    return(
        `select * from menu_${id}\n` +
        `where category_id = ${filter.category_id} and price > ${filter.from} and price < ${filter.to}`
    );
};

const insertIntoOrders = (restaurant_id, user_id, date, peopleAmount) => {
    return(
        `insert into restaurant_orders_${restaurant_id}(user_id, date, peopleAmount)\n` +
        `values (${user_id}, '${date}', ${peopleAmount});`
    );
};

const getUserIdByEmail = (email) => {
    return(
        `select id from users where email = '${email}'`
    );
};

const createUserOrdersTable = (id) => {
    return(
        `drop table if exists user_orders_${id} CASCADE;\n` +
        `create table user_orders_${id}(\n` +
        `id SERIAL primary key,\n` +
        `restaurant_id int,\n` +
        `date timestamp,\n` +
        `peopleAmount int);`
    );
};

const insertIntoUserOrders = (userId, restaurantId, date, peopleAmount) => {
    return(
        `insert into user_orders_${userId}(restaurant_id, date, peopleAmount)\n` +
        `values (${restaurantId}, '${date}', ${peopleAmount});`
    );
};

const getAllUserOrders = (id) => {
    return(
        `select * from user_orders_${id}`
    );
};

const getRestaurantById = (id) => {
    return(
        `select * from restaurants \n` +
        `where id = ${id}`
    );
};


exports.getRestaurantById = getRestaurantById;
exports.getAllUserOrders = getAllUserOrders;
exports.insertIntoUserOrders = insertIntoUserOrders;
exports.createUserOrdersTable = createUserOrdersTable;
exports.getUserIdByEmail = getUserIdByEmail;
exports.insertIntoOrders = insertIntoOrders;
exports.selectAllDishesRestaurantByFilters = selectAllDishesRestaurantByFilters;
exports.selectAllCategories = selectAllCategories;
exports.searchUserByEmail = searchUserByEmail;
exports.updatePasswordForUser = updatePasswordForUser;
exports.deleteFromForgotPassword = deleteFromForgotPassword;
exports.forgotPassword1 = forgotPassword1;
exports.forgotPassword2 = forgotPassword2;
exports.getRestaurantByIdWithDescription = getRestaurantByIdWithDescription;
exports.getAllImages = getAllImages;
exports.getAllCategories = getAllCategories;
exports.getMenu = getMenu;
exports.addUser = addUser;
exports.searchUserByEmailPassword = searchUserByEmailPassword;
exports.selectAllRestaurants = selectAllRestaurants;
exports.userAlreadyExist = userAlreadyExist;
