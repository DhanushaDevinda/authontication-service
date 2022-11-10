const nodemailer = require("nodemailer");
const formData = require('form-data');
const Mailgun = require('mailgun.js');

const sendEmail = (options) => {
  const mailGun = new Mailgun(formData);
  const client = mailGun.client({username: 'api', key: process.env.API_KEY});

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: options.to,
    subject: options.subject,
    html: options.text,
  };
 
  client.messages.create(process.env.DOMAIN, mailOptions)
 .then((res) => {
   console.log(res);
 })
 .catch((err) => {
   console.error(err);
 });
};

module.exports = sendEmail;
