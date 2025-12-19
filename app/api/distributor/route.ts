import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      companyName,
      contactPerson,
      email,
      phone,
      region,
      address,
      businessType,
      message,
    } = body;

    // Validate required fields
    if (
      !companyName ||
      !contactPerson ||
      !email ||
      !phone ||
      !region ||
      !address ||
      !businessType
    ) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
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
      subject: `Distributor Application: ${companyName}`,
      html: `
        <h2>New Distributor Application</h2>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Contact Person:</strong> ${contactPerson}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Preferred Region:</strong> ${region}</p>
        <p><strong>Business Address:</strong> ${address}</p>
        <p><strong>Business Type:</strong> ${businessType}</p>
        ${message ? `<p><strong>Additional Message:</strong></p><p>${message.replace(/\n/g, "<br>")}</p>` : ""}
        <hr>
        <p><small>Sent from Platform Lubricant Distributor Application Form</small></p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Application submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to submit application. Please try again later." },
      { status: 500 }
    );
  }
}

