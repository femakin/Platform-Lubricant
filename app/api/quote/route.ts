import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { productName, quantity, location, companyName, phone, email } = body;

    // Validate required fields
    if (!productName || !quantity || !location || !companyName || !phone || !email) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_EMAIL_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.ADMIN_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: `Quote Request: ${productName}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Product Name:</strong> ${productName}</p>
        <p><strong>Quantity:</strong> ${quantity}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr>
        <p><small>Sent from Platform Lubricant Quote Request Form</small></p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Quote request submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to submit quote request. Please try again later." },
      { status: 500 }
    );
  }
}

