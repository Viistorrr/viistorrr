import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: "victormeza41@gmail.com", // Your email where you'll receive emails
      from: "viistorrr@gmail.com", // your website email address here
      subject: "Gracias por tu interés en la Mentoría!",
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">      
        <title>Mentoría Desarrollador Frontend by @viistorrr</title>
        <meta name="description" content="Mentoría Desarrollador Frontend by @viistorrr">
        <meta name="author" content="viistorrr">
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        <link rel="stylesheet" href="css/styles.css?v=1.0">      
      </head>      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>Hola ${req.body.fullname.toUpperCase()},</h3>
              <h5>Gracias por interés en la mentoría para pronto convertirte en Desarrollador Frontend con ReactJS y NextJS, para conocernos podés agendar 📆 un One on One 👇🏾</h5>
              <a href="https://www.appointfix.com/book/viistorrr" target="_blank" style="text-decoration: none; color: #fff; background-color: #000; padding: 10px 20px; border-radius: 5px; font-size: 16px; font-weight: 600;">Agendar</a>
              <div style="font-size: 16px;">
              <p>Estas mentorías no tienen ningún costo, pero si querés apoyar mi trabajo, me podés invitar un café ☕️ en el siguiente link: </p>
                <a href="https://www.buymeacoffee.com/viistorrr" target="_blank" style="text-decoration: none; color: #fff;background-color: #804000; padding: 10px 20px; border-radius: 5px; font-size: 16px; font-weight: 600;">Buy me a coffee</a>
              Gracias!!! 😁✌🏾
              </p>
              </div>
              <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Regards<br>Víctor Meza<br>SR Frontend Dev - IT Consultant</p>
              <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
                <a href="https://www.viistorrr.com/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">www.viistorrr.com</a>
                <a href="https://github.com/viistorrr" style="text-decoration: none;margin: 8px;color: #9CA3AF;">GitHub</a>
                <a href="https://www.instagram.com/viistorrr/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Instagram</a>
                <a href="https://www.linkedin.com/in/viistorrr/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">LinkedIn</a>
                <a href="https://twitter.com/viistorrr" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Twitter</a>
              </div>
              </div>
             
      </body>
      </html>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
