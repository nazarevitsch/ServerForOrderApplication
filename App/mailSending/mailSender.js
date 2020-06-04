const nodeMailer = require('nodemailer');
const data = require('./dataForMailSender');

const sendMail = (mail, text ,code) => {
  let transport = nodeMailer.createTransport({
      service: 'gmail',
      auth: {
          user: data.mail,
          pass: data.password
      }
  });

  let mailOption = {
      from: data.mail,
      to: mail,
      subject: 'New Password',
      text: text + code
  }
  try {
      transport.sendMail(mailOption, (err, data) => {
          if (err) {
              console.log(err);
          }
          console.log('Mail sent' + data);
      })
  } catch (e) {
      console.log(e);
  }
};

const sendMailForForgotPasswordWithCode = (mail, code) =>{
    sendMail(mail, 'Your code for new password: ', code)
};

const sendMailForForgotPasswordWithPassword = (mail, password) =>{
    sendMail(mail, 'Your new password: ', password)
}

exports.sendMailForForgotPasswordWithPassword = sendMailForForgotPasswordWithPassword;
exports.sendMailForForgotPasswordWithCode = sendMailForForgotPasswordWithCode;
