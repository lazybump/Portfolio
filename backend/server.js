const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();
const port = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  // Create a transporter using your email service's SMTP settings
  const transporter = nodemailer.createTransport({
    host: "smtp.porkbun.com",
    port: 587,
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: "CONTACT FORM ENTRY",
    text: `Name: ${name}\n\nEmail: ${email}\n\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent! " + info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
