const client = require('./ConnectionToDB.js');
const query = require('./queryToDB.js');

async function getUserByEmailPassword(email, password){
    return new Promise((resolve, reject) => {
        client.query(query.searchUserByEmailPassword(email, password), (err, result) =>{
            if (err) {throw err}
            resolve({ok: result.rowCount > 0 ? true : false});
        });
    });
}

async function userAlreadyExist(email){
    return new Promise((resolve, reject) => {
        client.query(query.serchUserByEmail(email), (err, result) =>{
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

async function addUser(email, pass, name, phone){
    client.query(query.addUser(phone, pass, email, name), (err, result) => {
        if (err) {
            throw err
        }
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
                throw err
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

exports.forgotPassword1 = forgotPassword1;
exports.getRestaurantByIdWithDescription = getRestaurantByIdWithDescription;
exports.getAllImages = getAllImages;
exports.getAllCategories = getAllCategories;
exports.getMenu = getMenu;
exports.getUserByEmailPassword = getUserByEmailPassword;
exports.addUser = addUser;
exports.getAllRestaurnats = getAllRestaurants;
exports.userAlreadyExist = userAlreadyExist;
