const Queries = require('../workWithDB/queries.js');

const parseFilter = async (filters) => {
    let normalFilters = [];
    let lines = filters.split("|");
    for (let i = 0; i < lines.length - 1; i++){
        let f = lines[i].split('_');
        normalFilters.push({category_id: Number(f[1]), from: Number(f[0]), to: Number(f[2])});
    }
    return normalFilters;
};

const choiceRestaurants = async (restaurants, filters) => {
    for (let i = restaurants.data.length - 1; i >= 0; i--) {
        loop: for (let l = 0; l < filters.length; l++) {
            let a = await Queries.getRestaurantMenuByFilters(restaurants.data[i].id, filters[l])
            if (a.data === 0) {
                restaurants.data.splice(i, 1);
                break loop;
            }
        }
    }
    return restaurants;
};

const getRestaurants = async (filters) => {
    if (filters === '') {
        return await Queries.getAllRestaurants();
    } else {
        let parsedFilters = await parseFilter(filters);
        let restaurants = await Queries.getAllRestaurants();
        return await choiceRestaurants(restaurants, parsedFilters);
    }
}

exports.getRestaurants = getRestaurants;
exports.choiceRestaurants = choiceRestaurants;
exports.parseFilter = parseFilter;
