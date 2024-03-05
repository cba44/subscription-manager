const { createTransport } = require('nodemailer');

const transporter = createTransport({
    host: "smtp.sendgrid.net", //Change here if needed
    port: 465, //Change here if needed
    auth: {
        user: "", //Change here
        pass: "", //Change here
    }
});

const mailOptions = {
    from: 'reminder@example.com', //Change here
    to: 'receiver@example.com', //Change here
    subject: `Subscription renew notice`,
    text: `Your subscription renews in 1 day`
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});