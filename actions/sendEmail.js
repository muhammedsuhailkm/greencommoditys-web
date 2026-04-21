"use server";
import nodemailer from "nodemailer";

export async function sendEmail(formData) {
  // 1. Extract data from the form
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // 2. Configure the connection to your mail server
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: false, // Set to true if using port 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    // 3. Send the email
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`, // Most servers require 'from' to match your auth user
      to: process.env.CONTACT_EMAIL,
      replyTo: email, // Directs your replies to the person who filled out the form
      subject: `New Website Enquiry from ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    return { success: true };
  } catch (error) {
    console.error("Mail Server Error:", error);
    return { success: false, error: "Failed to send message." };
  }
}
