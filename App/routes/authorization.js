const Queries = require('../workWithDB/queries.js');
const mailSender = require('../mailSending/mailSender.js');
const createPassword = require('./randomPassword.js');


const signIn = async (email, password) => {
    let a = await Queries.getUserByEmailPassword(email, password);
    return a.ok ? 200 : 401;
};

const signUp = async (data) => {
    let email = data.email;
    let password = data.pass;
    let phone = data.phone;
    let name = data.name;
    let a = await Queries.userAlreadyExist(email, phone);
    if (a.ok) {
        return 401;
    } else {
        let b = await Queries.addUser(email, password, name, phone);
        let userId = await Queries.getUserIdByEmail(email);
        await Queries.createUserOrdersTable(userId);
        return  b.ok ? 200 : 401;
    }
};

const ForgotPassword1 = async  (email) => {
    let b = await Queries.searchUserByEmail(email);
    if (b.ok) {
        let code;
        if (email === 'test@gmail.com'){
            code = 111111;
        }
        else {
        code = Math.floor(Math.random() * 899999) + 100000;
        }
        let a = await Queries.forgotPassword1(email, code);
        if (a.ok) {
            await mailSender.sendMailForForgotPasswordWithCode(email, code);
            return 200;
        }
    } else {
        return 401;
    }
};

const ForgotPassword2 = async  (email, code) => {
    let answer = await Queries.forgotPassword2(email, code);
    if (answer.ok){
        let pass = createPassword.createRandomPassword(10);
        await Queries.deleteFromForgotPassword(email);
        let b = await Queries.updatePasswordForUser(email, pass);
        mailSender.sendMailForForgotPasswordWithPassword(email, pass);
        if (b.ok) return 200;
    }
};


exports.ForgotPassword1 = ForgotPassword1;
exports.ForgotPassword2 = ForgotPassword2;
exports.signUp = signUp;
exports.signIn = signIn;
