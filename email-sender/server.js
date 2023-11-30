const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = process.env.PORT || 3000;

// Create a Nodemailer transporter with your SMTP configuration.
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Replace with your SMTP provider (e.g., 'Gmail', 'Yahoo', etc.).
  auth: {
    user: 'ketan.webearl@gmail.com',
    pass: 'ketan@2212', // Replace with your actual email password.
  },
});

// Define an endpoint for sending emails.
app.post('/send-email', (req, res) => {
  // Replace these values with your email content and recipients.
  const mailOptions = {
    from: 'ketan.webearl@gmail.com',
    to: 'ketanprajapati9531@gmail.com',
    subject: 'Debate',
    text: 'Hello, this is a test email from your Node.js server!',
  };

  // Send the email.
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Email sending failed');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
