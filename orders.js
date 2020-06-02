const Queries = require('./queries.js');


const createOrder = async (email, id, date, peopleAmount) => {
    let userId = await Queries.getUserIdByEmail(email);
    await Queries.insertIntoOrders(id, userId.data, date, peopleAmount);
    return "Y";
};

exports.createOrder = createOrder;
