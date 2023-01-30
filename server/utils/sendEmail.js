import nodemailer from 'nodemailer';

// Does this need to be async?
const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: "GMail",
    auth: {
      user: process.env.EMAIL_SRV_USERNAME,
      pass: process.env.EMAIL_SRV_PASSWORD
    }
  })

  const mailOptions = {
    from: process.env.EMAIL_SENDER_ADDRESS,
    to: options.to,
    subject: options.subject,
    html: options.text
  }

  transporter.sendMail(mailOptions, (err, info) => {
    if(err) console.log(err);
    else console.log(info);
  })
}

export default sendEmail;