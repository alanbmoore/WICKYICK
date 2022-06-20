import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_SERVER,
  port: parseInt(process.env.SMTP_PORT || 25),
  secure: false,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const sendMail = (
  subject: string,
  text: string,
  from: string,
  recipients: string[]
) => {
  return new Promise(async (resolve, reject) => {
    try {
      const mailOptions = {
        from,
        to: recipients.join(),
        subject,
        text,
      };
      await transporter.sendMail(mailOptions);
      resolve({});
    } catch (error) {
      console.log("error", error);
      reject(error);
    }
  });
};
