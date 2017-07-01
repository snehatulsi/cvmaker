import nodemailer from 'nodemailer';

class Mailer {
  constructor(user, pass) {
    try {
      this.transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: user,
          pass: pass
        }
      });
    } catch(e) {
      console.log(e);
    }
  }
  sendFeedback(obj) {
    let mailOptions = {
      from: obj.email,
      to: 'cvmakerindia@gmail.com',
      subject: `Feedback form from ${obj.fullname}`,
      html: obj.message
    };

    this.transporter.sendMail(mailOptions, (error, info) => {
      if (error) console.log(error);
      else console.log('Message %s sent: %s', info.messageId, info.response);
    });
  }
}

export default Mailer;

