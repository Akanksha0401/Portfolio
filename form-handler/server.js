const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post('/submit-form', (req, res) => {
    const { name, email, subject, message } = req.body;


    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'akankshamishra22122001@gmail.com',
            pass: '##########'
        }
    });

    const mailOptions = {
        from: email,
        to: 'akankshamishra22122001@gmail.com',
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };


    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Form submitted successfully!');
        }
    });
});


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
