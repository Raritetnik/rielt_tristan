const nodemailer = require('nodemailer');


let testEmailAccount = await nodemailer.createTestAccount();

let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    service: 'gmail',
    auth: {
        user: "benoit.survivalist@gmail.com",
        pass: "ufrSI%!6Bs0E",
    },
});

let result = await transporter.sendMail({
    from: '"Node js" <nodejs@example.com>',
    to: 'demese5244@rdluxe.com',
    subject: 'Message from Node js',
    text: 'This message was sent from Node js server.',
    html:
        'This <i>message</i> was sent from <strong>Node js</strong> server.',
});

console.log(result);

