import { NextRequest, NextResponse } from "next/server";

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
        { 
          success: false,
          error: "All required fields must be filled",
          message: "Please fill in all required fields"
        },
        { status: 400 }
      );
    }

    // Get CSRF token from environment variable
    const csrfToken = process.env.CSRF_TOKEN || "u9appu0TqntEnqHGRzoEI55BCEWeZLSqcv3b24Yugad9InsN2FOkyiW45Fl8wkFT";

    // Map form fields to API format
    const apiPayload = {
      company_name: companyName,
      contact_person: contactPerson,
      email_address: email,
      phone_number: phone,
      preferred_region: region,
      business_type: businessType,
      business_address: address,
      additional_message: message || "",
    };

    // Call external API
    const apiResponse = await fetch("https://api.platformlead.com/api/oil-gas/distributor-application/", {
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
      let errorMessage = apiData.message || "Failed to submit application. Please try again.";
      
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

    // Success response (201 Created)
    return NextResponse.json(
      { 
        success: true,
        message: apiData.message || "Application submitted successfully",
        data: apiData.data
      },
      { status: apiResponse.status || 201 }
    );
  } catch (error) {
    console.error("Error calling distributor API:", error);
    return NextResponse.json(
      { 
        success: false,
        error: "Failed to submit application. Please try again later.",
        message: "An unexpected error occurred. Please try again."
      },
      { status: 500 }
    );
  }
}

