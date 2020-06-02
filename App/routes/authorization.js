const Queries = require('../workWithDB/queries.js');
const mailSender = require('../mailSending/mailSender.js');
const createPassword = require('./randomPassword.js');


const signIn = async (email, password) => {
    let a = await Queries.getUserByEmailPassword(email, password);
    return a.ok ? "Y" : "N";
};

const signUp = async (email, password, phone, name) => {
    let a = await Queries.userAlreadyExist(email, phone);
    if (a.ok) {
        return "N";
    } else {
        let b = await Queries.addUser(email, password, name, phone);
        return  b.ok ? "Y" : "N";
    }
};

const ForgotPassword1 = async  (email) => {
    let b = await Queries.searchUserByEmail(email);
    if (b.ok) {
        let code = Math.floor(Math.random() * 899999) + 100000;
        let a = await Queries.forgotPassword1(email, code);
        if (a.ok) {
            await mailSender.sendMailForForgotPasswordWithCode(email, code);
            return "Y";
        }
    } else {
        return "N";
    }
};

const ForgotPassword2 = async  (email, code) => {
    let answer = await Queries.forgotPassword2(email, code);
    if (answer.ok){
        let pass = createPassword.createRandomPassword(10);
        await Queries.deleteFromForgotPassword(email);
        let b = await Queries.updatePasswordForUser(email, pass);
        mailSender.sendMailForForgotPasswordWithPassword(email, pass);
        if (b.ok) return "Y";
    }
};


exports.ForgotPassword1 = ForgotPassword1;
exports.ForgotPassword2 = ForgotPassword2;
exports.signUp = signUp;
exports.signIn = signIn;
