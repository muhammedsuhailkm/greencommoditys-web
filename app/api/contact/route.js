import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { firstName, lastName, email, phone, message } = await req.json();

    if (!firstName || !lastName || !email || !message) {
      return Response.json({ error: "All required fields must be filled" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // true only for 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New Contact Form Message from ${firstName} ${lastName}`,
      text: `
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Email failed to send" }, { status: 500 });
  }
}
