const nodemailer = require("nodemailer");
require("dotenv").config();

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    //stop trying to find out my email and password
    user: "process.env.EMAIL",
    pass: "process.env.PASSWORD",
  },
});

let mailOptions = {
  from: "jorofino12@gmail.com",
  to: "josephorofino23@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    //handle error
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
