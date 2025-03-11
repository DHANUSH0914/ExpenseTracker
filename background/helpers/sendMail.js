const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

function createTransporter(config) {
    const transporter = nodemailer.createTransport(config);
    return transporter;
}


let confirguration = {
    service: "gamil",
    host: "smtp.gmail.com",
    PORT: 587,
    requireTLS: true,
    auth: {
        user: process.env.Email,
        pass: process.env.PASSWORD
    }
}

const sendMail = async (messageOption) => {
    const transporter = await createTransporter(confirguration);
    await transporter.verify();
    await transporter.sendMail(messageOption, (error, info) => {
        if (error) {
            console.log(error)
        }
        console.log(info.response);
    })
}


module.exports = sendMail;