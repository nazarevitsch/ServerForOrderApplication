const Queries = require('../workWithDB/queries.js');

async function createMenu(data) {
    let answer = [];
    let categories = await Queries.getAllCategories();
    for (let i = categories.data.length - 1; i >= 0; i--) {
        loop: for (let l = 0; l < data.length; l++) {
            if (categories.data[i].category_id === data[l].category_id) {
                answer.push([categories.data[i].name]);
                break loop;
            }
        }
    }
    for (let i = 0; i < data.length; i++) {
        loop: for (let l = 0; l < categories.data.length; l++){
            if (categories.data[l].category_id === data[i].category_id) {
                for (let j = 0; j < answer.length; j++) {
                    if (categories.data[l].name === answer[j][0]) {
                        answer[j].push([data[i].name, data[i].price]);
                        break loop
                    }
                }
            }
        }
    }
    return answer;
}


exports.createMenu = createMenu;
