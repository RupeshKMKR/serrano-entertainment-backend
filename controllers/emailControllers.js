import expressAsyncHandler from "express-async-handler";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
dotenv.config();

let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_MAIL, // generated ethereal user
        pass: process.env.SMTP_PASSWORD, // generated ethereal password
    },
});

export const sendEmail = expressAsyncHandler(async (req, res) => {
    const { emails, name, message, number } = req.body;
    console.log("req.body", req.body);

    console.log(emails, name, message, number);
    let emaliTo = process.env.SMTP_MAIL;
    var mailOptions = {
        from: emails,
        to: emaliTo,
        text: message,
        html: `  <div
        style="background-color: #fff; color:black;  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;">
        <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 37.5em" >
          <tr style="width: 100%">
            <td>
              <table style="padding: 0px 0px" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" >
                <tbody>
                  <tr>
                    <td>
                    <h1 style="font-size: 32px; font-weight: bold; text-align: left;">Serrano</h1>
                    </td>
                  </tr>
                </tbody>
              </table>
                <table
                style=" border: 1px solid rgb(0, 0, 0, 0.1); border-radius: 3px; overflow: hidden; " align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                <tbody>
                  <tr>
                    <td>
                        <td>
                            <img style="display: block; outline: none; border: none; text-decoration: none;" src="https://assets-in.bmscdn.com/nmcms/events/banner/mobile/media-mobile-ride-with-badshah-0-2023-5-1-t-7-28-52.jpg" width="620">
                            <table style="padding: 20px 40px; padding-bottom: 0;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
                            <tbody style="width: 100%;">
                            <tr style="width: 100%;">
                        <td>
                      <table width="100%" style="padding: 20px 40px; padding-bottom: 0" align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" >
                        <tbody style="width: 100%">
                            <tr style="width: 100%">
                                <td>
                                    <h1 style="font-size: 32px; font-weight: bold; text-align: center;">Hi <span style="font-weight: 400; line-height: 28px; text-transform: capitalize;"> ${name}</span></h1>
                                    <p style="font-size: 26px; line-height: 24px; font-weight: bold; margin: 16px 0; text-align: center; color: #fc1111;"> Ride With <span style="color: black; font-size: 30px;">Badshah</span>  </p>
                                    <p style="font-size: 26px; line-height: 24px; font-weight: 400; margin: 10px 0px 26px ;   text-align: center;"> Biggest  Bollywood Concert  </p>
  
                                    <p style="font-size: 20px; line-height: 24px; font-weight: 600; margin: 16px 0; "><b>Date </b> : Sat, 24 Jun 2023 | 7:00 PM </p>
                                    <p style="font-size: 18px; line-height: 24px; margin: 16px 0; font-weight: 500;"> <b>Venue</b> : Venue To Be Announced : Hyderabad</p>
                                    <p style="font-size: 16px; font-weight: 400; line-height: 24px; margin: 12px 0; "><span style="font-weight: 600">Mobile Number</span> : ${number}&nbsp;</p>
                                    <p style="font-size: 16px; font-weight: 400; line-height: 24px; margin: 12px 0;"><span style="font-weight: 600 ">Email</span> : ${emails}&nbsp;</p>
                                    <p style="font-size: 16px; font-weight: 400; line-height: 24px; margin: 12px 0;  text-transform: capitalize; "><span style="font-weight: 600">Address</span> : ${message}&nbsp;</p>
                                   
                                </td>
                            </tr>
                        </tbody>
                    </table>
                                </td>
                                    </tr>
                            </tbody>
                            </table>
                               <table style="padding: 45px 0 0 0;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
                               <tbody>
                               <tr>
                               <td><img style="display: block; outline: none; border: none; text-decoration: none;" src="https://react-email-demo-ijnnx5hul-resend.vercel.app/static/yelp-footer.png" width="620"></td>
                               </tr>
                               </tbody>
                               </table>
                               <p style="font-size: 12px; line-height: 24px; margin: 16px 0; text-align: center; color: rgb(0, 0, 0, 0.7);">&copy; 2023 | Serrano, Designed by Gyarala Technologies Private Limited.</p>
                               </td>
                               </tr>
                               </tbody>
                               </table>`,

    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent successfully!");
        }
    });
});
