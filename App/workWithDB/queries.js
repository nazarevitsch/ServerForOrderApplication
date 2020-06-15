const client = require('./ConnectionToDB.js');
const query = require('./queryToDB.js');

async function getUserByEmailPassword(email, password){
    return client
        .query(query.searchUserByEmailPassword(email, password))
        .then(result => {return {ok: result.rowCount === 1 ? true : false}})
        .catch(err => console.log(err));
}

async function userAlreadyExist(email, phone){
    return client
        .query(query.userAlreadyExist(email, phone))
        .then(result => {return {ok: result.rowCount === 1 ? true : false}})
        .catch(err => console.log(err));
};

async function getAllRestaurants() {
    return client
        .query(query.selectAllRestaurants)
        .then(result => {return {status: 200, data: result.rows}})
        .catch(err => {console.log(err)});
}

async function addUser(email, pass, name, phone) {
    return client
        .query(query.addUser(phone, pass, email, name))
        .then(result => {return {ok: true}})
        .catch(err => {console.log(err)});
}

async function getMenu(id){
    return client
        .query(query.getMenu(id))
        .then(result => {return {data: result.rows}})
        .catch(err => {console.log(err)});
}

async function getAllCategories(){
    return client
        .query(query.getAllCategories())
        .then(result => {return {data: result.rows}})
        .catch(err => {console.log(err)})
}

async function getAllImages(id){
    return client
        .query(query.getAllImages(id))
        .then(result => {return {data: result.rows}})
        .catch(err => {console.log(err)});
}
async function getRestaurantByIdWithDescription(id){
    return client
        .query(query.getRestaurantByIdWithDescription(id))
        .then(result => {return {data: result.rows}})
        .catch(err => {console.log(err)})
}

async function forgotPassword1(login, code){
    return client
        .query(query.forgotPassword1(login, code))
        .then(result => {return {ok: 'ok'}})
        .catch(err => {console.log(err)})
}

async function forgotPassword2(login, code){
    return client
        .query(query.forgotPassword2(login, code))
        .then(result => {return{ok: result.rowCount === 1 ? true : false}})
        .catch(err => {console.log(err)})
}

async function deleteFromForgotPassword(login){
    return client
        .query(query.deleteFromForgotPassword(login))
        .then(result => {return {ok: result.rowCount === 1 ? true : false}})
        .catch(err => {console.log(err)})
}

async function updatePasswordForUser(email, password){
    return client
        .query(query.updatePasswordForUser(email, password))
        .then(result => {return {ok: true}})
        .catch(err => {console.log(err)})
}

async function searchUserByEmail(email) {
    return client
        .query(query.searchUserByEmail(email))
        .then(result => {return {ok: result.rowCount === 1 ? true : false}})
        .catch(err => {console.log(err)})
}

async function getAllCategories(){
    return client
        .query(query.selectAllCategories)
        .then(result => {return {data: result.rows}})
        .catch(err => {console.log(err)})
}

async function getRestaurantMenuByFilters(id, filter){
    return client
        .query(query.selectAllDishesRestaurantByFilters(id, filter))
        .then(result => {return {data: result.rowCount}})
        .catch(err => {console.log(err)})
}

async function getUserIdByEmail(email){
    return client
        .query(query.getUserIdByEmail(email))
        .then(result => {return {data: result.rows[0].id}})
        .catch(err => {console.log(err)})
}

async function insertIntoOrders(restaurant_id, user_id, date, peopleAmount){
    return client
        .query(query.insertIntoOrders(restaurant_id, user_id, date, peopleAmount))
        .then(result => {return {}})
        .catch(err => {console.log(err)})
}

async function createUserOrdersTable(id){
    client.query(query.createUserOrdersTable(id), (err, result) => {
        if (err){
            console.log(err);
        }
    })
}

async function insertIntoUserOrders(userId, restaurantId, date, peopleAmount){
    client.query(query.insertIntoUserOrders(userId, restaurantId, date, peopleAmount), (err, result) => {
        if (err){
            console.log(err);
        }
    })
}

async function getAllUserOrders(id){
    return client
        .query(query.getAllUserOrders(id))
        .then(result => {return {data: result.rows}})
        .catch(err => {console.log(err)})
}

async function getRestaurantById(id){
    return client
        .query(query.getRestaurantById(id))
        .then(result => {return {data: result.rows}})
        .catch(err => {console.log(err)})
}

module.exports = {
    getRestaurantById,
    getAllUserOrders,
    createUserOrdersTable,
    insertIntoUserOrders,
    insertIntoOrders,
    getUserIdByEmail,
    getRestaurantMenuByFilters,
    getAllCategories,
    searchUserByEmail,
    updatePasswordForUser,
    deleteFromForgotPassword,
    forgotPassword2,
    forgotPassword1,
    getRestaurantByIdWithDescription,
    getAllImages,
    getMenu,
    getUserByEmailPassword,
    addUser,
    getAllRestaurants,
    userAlreadyExist
};
