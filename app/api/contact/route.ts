import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { 
          success: false,
          error: "All fields are required",
          message: "Please fill in all required fields"
        },
        { status: 400 }
      );
    }

    // Validate message length (API requires at least 10 characters)
    if (message.length < 10) {
      return NextResponse.json(
        { 
          success: false,
          error: "Message must be at least 10 characters long",
          message: "Please provide a more detailed message"
        },
        { status: 400 }
      );
    }

    // Get CSRF token from environment variable
    const csrfToken = process.env.CSRF_TOKEN || "u9appu0TqntEnqHGRzoEI55BCEWeZLSqcv3b24Yugad9InsN2FOkyiW45Fl8wkFT";

    // Map form fields to API format
    const apiPayload = {
      full_name: name,
      phone_number: phone,
      email_address: email,
      subject: subject,
      message: message,
    };

    // Call external API
    const apiResponse = await fetch("https://api.platformlead.com/api/oil-gas/contact/", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
      },
      body: JSON.stringify(apiPayload),
    });

    const apiData = await apiResponse.json();

    // Handle API response
    if (!apiResponse.ok || !apiData.success) {
      // Extract error message from API response
      let errorMessage = apiData.message || "Failed to send message. Please try again.";
      
      // If there are field-specific errors, format them
      if (apiData.errors) {
        const errorMessages = Object.entries(apiData.errors)
          .map(([field, errors]) => {
            const errorArray = Array.isArray(errors) ? errors : [errors];
            return errorArray.join(", ");
          })
          .join(". ");
        
        if (errorMessages) {
          errorMessage = errorMessages;
        }
      }

      return NextResponse.json(
        { 
          success: false,
          error: errorMessage,
          message: apiData.message || errorMessage,
          errors: apiData.errors
        },
        { status: apiResponse.status || 400 }
      );
    }

    // Success response
    return NextResponse.json(
      { 
        success: true,
        message: apiData.message || "Message sent successfully",
        data: apiData.data
      },
      { status: apiResponse.status || 200 }
    );
  } catch (error) {
    console.error("Error calling contact API:", error);
    return NextResponse.json(
      { 
        success: false,
        error: "Failed to send message. Please try again later.",
        message: "An unexpected error occurred. Please try again."
      },
      { status: 500 }
    );
  }
}

