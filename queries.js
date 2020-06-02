const client = require('./ConnectionToDB.js');
const query = require('./queryToDB.js');

async function getUserByEmailPassword(email, password){
    return new Promise((resolve, reject) => {
        client.query(query.searchUserByEmailPassword(email, password), (err, result) =>{
            if (err) {throw err}
            resolve({ok: result.rowCount === 1 ? true : false});
        });
    });
}

async function userAlreadyExist(email, phone){
    return new Promise((resolve, reject) => {
        client.query(query.userAlreadyExist(email, phone), (err, result) =>{
            if (err) {throw err}
            resolve({ok: result.rowCount > 0 ? true : false});
        });
    });
};

async function getAllRestaurants() {
    return new Promise((resolve, reject) => {
        client.query(query.selectAllRestaurants, (err, result) => {
            if (err) {
                throw err
            }
            resolve({status: 200, data: result.rows});
        });
    });
}

async function addUser(email, pass, name, phone) {
    return new Promise((resolve, reject) => {
        client.query(query.addUser(phone, pass, email, name), (err, result) => {
            if (err) {
                throw err
            }
            resolve({ok: true});
        });
    });
}

async function getMenu(id){
    return new Promise((resolve, reject) => {
        client.query(query.getMenu(id), (err, result) => {
            if (err) {
                throw err
            }
            resolve({data: result.rows});
        });
    });
}

async function getAllCategories(){
    return new Promise((resolve, reject) => {
        client.query(query.getAllCategories(), (err, result) => {
            if (err) {
                throw err
            }
            resolve({data: result.rows});
        });
    });
}

async function getAllImages(id){
    return new Promise((resolve, reject) => {
        client.query(query.getAllImages(id), (err, result) => {
            if (err) {
                throw err;
            }
            resolve({data: result.rows});
        });
    });
}
async function getRestaurantByIdWithDescription(id){
    return new Promise((resolve, reject) => {
        client.query(query.getRestaurantByIdWithDescription(id), (err, result) => {
            if (err) {
                throw err
            }
            resolve({data: result.rows});
        });
    });
}

async function forgotPassword1(login, code){
    return new Promise((resolve, reject) => {
        client.query(query.forgotPassword1(login, code), (err, result) => {
            if (err) {
                throw err
            }
        });
        resolve({ok: 'ok'});
    })
}

async function forgotPassword2(login, code){
    return new Promise((resolve, reject) => {
        client.query(query.forgotPassword2(login, code), (err, result) => {
            if (err) {
                throw err
            }
            resolve({ok: result.rowCount = 1 ? true : false});
        });
    })
}

async function deleteFromForgotPassword(login){
    return new Promise((resolve, reject) => {
        client.query(query.deleteFromForgotPassword(login), (err, result) => {
            if (err) {
                throw err
            }
            resolve({ok: result.rowCount = 1 ? true : false});
        });
    })
}

async function updatePasswordForUser(email, password){
    return new Promise((resolve, reject) => {
        client.query(query.updatePasswordForUser(email, password), (err, result) => {
            if (err) {
                throw err
            }
            resolve({ok: true});
        });
    })
}

async function searchUserByEmail(email) {
    return new Promise((resolve, reject) => {
        client.query(query.searchUserByEmail(email), (err, result) => {
            if (err) {
                throw err
            }
            resolve({ok: result.rowCount = 1 ? true : false});
        });
    });
}

async function getAllCategories(){
    return new Promise((resolve, reject) => {
        client.query(query.selectAllCategories, (err, result) => {
            if (err){
                throw err;
            }
            resolve({data: result.rows});
        })
    });
}

async function getRestaurantMenuByFilters(id, filter){
    return new Promise((resolve, reject) => {
        client.query(query.selectAllDishesRestaurantByFilters(id, filter), (err, result) => {
            if (err){
                throw err;
            }
            resolve({data: result.rowCount});
        })
    });
}

async function getUserIdByEmail(email){
    return new Promise((resolve, reject) => {
        client.query(query.getUserIdByEmail(email), (err, result) => {
            if (err){
                throw err;
            }
            resolve({data: result.rows[0].id});
        })
    });
}

async function insertIntoOrders(restaurant_id, user_id, date, peopleAmount){
    return new Promise((resolve, reject) => {
        client.query(query.insertIntoOrders(restaurant_id, user_id, date, peopleAmount), (err, result) => {
            if (err){
                throw err;
            }
            resolve({});
        })
    });
}

exports.insertIntoOrders = insertIntoOrders;
exports.getUserIdByEmail = getUserIdByEmail;
exports.getRestaurantMenuByFilters = getRestaurantMenuByFilters;
exports.getAllCategories = getAllCategories;
exports.searchUserByEmail = searchUserByEmail;
exports.updatePasswordForUser = updatePasswordForUser;
exports.deleteFromForgotPassword = deleteFromForgotPassword;
exports.forgotPassword2 = forgotPassword2;
exports.forgotPassword1 = forgotPassword1;
exports.getRestaurantByIdWithDescription = getRestaurantByIdWithDescription;
exports.getAllImages = getAllImages;
exports.getAllCategories = getAllCategories;
exports.getMenu = getMenu;
exports.getUserByEmailPassword = getUserByEmailPassword;
exports.addUser = addUser;
exports.getAllRestaurnats = getAllRestaurants;
exports.userAlreadyExist = userAlreadyExist;
