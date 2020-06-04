const Queries = require('../workWithDB/queries.js');


const createOrder = async (email, id, date, peopleAmount) => {
    let userId = await Queries.getUserIdByEmail(email);
    await Queries.insertIntoUserOrders(userId.data, id, date, peopleAmount);
    await Queries.insertIntoOrders(id, userId.data, date, peopleAmount);
    return "Y";
};

const getUserOrders = async (email) => {
    let answer =[];
    let userId = await Queries.getUserIdByEmail(email);
    let orders = await Queries.getAllUserOrders(userId.data);
    loop: for(let i = 0; i < orders.data.length; i++){
        let restaurant = await Queries.getRestaurantById(orders.data[i].restaurant_id);
        answer.push({
            name: restaurant.data[0].name,
            date: orders.data[i].date,
            id: orders.data[i].id
        });
    }
    return answer
};

exports.getUserOrders = getUserOrders;
exports.createOrder = createOrder;
