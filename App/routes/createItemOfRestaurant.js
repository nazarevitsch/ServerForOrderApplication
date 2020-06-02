const Queries = require('../workWithDB/queries.js');
const menuParser = require('./createMenu.js');

const getItem = async (id) => {
    let a = await Queries.getMenu(id);
    let menu = await menuParser.createMenu(a.data);
    let images = await Queries.getAllImages(id);
    let restaurant = await Queries.getRestaurantByIdWithDescription(id);
    return [{
        id: restaurant.data[0].id,
        name: restaurant.data[0].name,
        location: restaurant.data[0].location,
        mainImage: restaurant.data[0].main_image,
        description: restaurant.data[0].description,
        images: images.data,
        menu: menu
    }]
};

exports.getItem = getItem;
