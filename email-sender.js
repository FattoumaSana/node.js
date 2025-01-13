
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail", // Vous pouvez utiliser un autre service comme 'yahoo', 'outlook', etc.
  auth: {
    user: "votre_email@gmail.com", // Remplacez par votre adresse email
    pass: "votre_mot_de_passe", // Remplacez par votre mot de passe
  },
});

const mailOptions = {
  from: "votre_email@gmail.com",
  to: "destinataire_email@example.com", // Remplacez par l'adresse email du destinataire
  subject: "Test Email",
  text: "Ceci est un test d'envoi d'email avec Node.js",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});