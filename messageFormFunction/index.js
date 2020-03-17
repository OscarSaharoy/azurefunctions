
var API_KEY = "secret!";

module.exports = async function (context, req) {
    
    var params = req.body;

    if(params.email && params.name && params.message) {

        context.res = {status: 200, body: "Thankyou for your message."};

        const sgMail = require('@sendgrid/mail');
        sgMail.setApiKey(API_KEY);
        const msg = {
            to: 'office@heroncreative.co.uk',
            from: 'website@heroncreative.co.uk',
            subject: 'New message from '+params.email,
            text: "Email Address: "+params.email+"\n\nName: "+params.name+"\n\nMessage: "+params.message,
        };
        sgMail.send(msg);
    }
    else {
        
        context.res = {status: 400, body: "Please include a name, email address and message.", isRaw: true};
    }
};
