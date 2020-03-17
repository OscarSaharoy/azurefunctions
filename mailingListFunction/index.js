
var API_KEY = "secret!";

module.exports = async function (context, req) {
    
    var params = req.body;

    if (params.email && params.email.includes("@") && params.email.includes(".")) {

        context.res = {status: 200, body: "Email added to database ok."};

        const sgMail = require('@sendgrid/mail');
        sgMail.setApiKey(API_KEY);
        const msg = {
            to: 'office@heroncreative.co.uk',
            from: 'website@heroncreative.co.uk',
            subject: 'New addition to mailing list',
            text: params.email,
        };
        sgMail.send(msg);
    }
    else {

        context.res = {status: 400, body: "Please include your email address.", isRaw: true};
    }
};
