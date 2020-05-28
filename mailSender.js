const nodeMailer = require('nodemailer');
const data = require('./dataForMailSender');

const sendMailForForgotPassword = (mail, code) => {
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
      text: 'Your code for new password: ' + code
  }
  transport.sendMail(mailOption, (err, data) =>{
      if (err){
          console.log(err);
      }
      console.log('Mail sent' + data);
  })
};

exports.sendMailForForgotPassword = sendMailForForgotPassword;
