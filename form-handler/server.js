const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// POST endpoint to handle form submissions
app.post('/submit-form', (req, res) => {
    const { name, email, subject, message } = req.body;

    // Create a transporter using Nodemailer with your SMTP settings
    const transporter = nodemailer.createTransport({
        service: 'Gmail', // Assuming you're using Gmail
        auth: {
            user: 'akankshamishra22122001@gmail.com', // Your email address
            pass: 'Mishraak@456' // Your email password or app password for Gmail
        }
    });

    // Configure the email message
    const mailOptions = {
        from: email, // Sender's email address from the form
        to: 'akankshamishra22122001@gmail.com', // Your email address (recipient)
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send the email
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

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
