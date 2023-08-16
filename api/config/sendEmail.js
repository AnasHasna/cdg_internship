const nodemailer = require("nodemailer");

async function sendEmail(verifyCode, email) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "bensaltanahassan@gmail.com",
      pass: "mnddzznbldyoyksm",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const info = {
    from: '"CDG Code de récupération" <cdgtestmessage@gmail.com>',
    to: `${email}`,
    subject: "Verification Code",
    html: `<h1>Code de récupération</h1>
    <p>Voici votre code de récupération: ${verifyCode}</p>`,
  };

  await transporter.sendMail(info, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent");
    }
  });
}

module.exports = sendEmail;
