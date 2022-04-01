const nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: "kaustubhnatuskar143@gmail.com",
		pass: "cfdrajopzsnrtnhg",
	},
});

module.exports.sendResetEmail = async (email, token) => {
   // change first part to your domain
  var url = "http://natuskar.herokuapp.com/user/reset-password?token=" + token;

  await smtpTransport.sendMail({
    from: "kaustubhnatuskar143@gmail.com",
    to: email,
    subject: "RESET YOUR PASSWORD",
    text: `Click on this link to reset your password ${url}`,
    html: `<h3> Click on this link to reset your password : ${url} </h3>`,
  });
};

module.exports.sendVerifyEmail = async (email, token) => {
  // change first part to your domain
  var url = "http://natuskar.herokuapp.com/user/verifyemail?token=" + token;

  await smtpTransport.sendMail({
    from: "<your email>",
    to: email,
    subject: "VERIFY Your EMAIL",
    text: `Click on this link to verify ${url}`,
    html: `<h3> Click on this link to verify your email : ${url} </h3>`,
  });
};
