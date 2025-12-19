# Email Setup Instructions

This project uses Gmail SMTP to send form submissions to an admin email address.

## Setup Steps

1. **Create a `.env.local` file** in the root directory of the project with the following variables:

```env
ADMIN_EMAIL=your-email@gmail.com
ADMIN_EMAIL_PASSWORD=your-app-password-here
```

2. **Generate a Gmail App Password:**
   - Go to your Google Account: https://myaccount.google.com/
   - Navigate to Security → 2-Step Verification (must be enabled)
   - Scroll down to "App passwords"
   - Generate a new app password for "Mail"
   - Copy the 16-character password and use it as `ADMIN_EMAIL_PASSWORD`

3. **Important Notes:**
   - Use your Gmail address for `ADMIN_EMAIL`
   - Use the App Password (not your regular Gmail password) for `ADMIN_EMAIL_PASSWORD`
   - Never commit `.env.local` to version control
   - The admin email will receive all form submissions from:
     - Contact Form
     - Quote Requests
     - Distributor Applications

## Forms That Send Emails

1. **Contact Form** (`/api/contact`)
   - Sends: Name, Email, Phone, Subject, Message

2. **Quote Request** (`/api/quote`)
   - Sends: Product Name, Quantity, Location, Company Name, Phone, Email

3. **Distributor Application** (`/api/distributor`)
   - Sends: Company Name, Contact Person, Email, Phone, Region, Address, Business Type, Message

All emails are sent to the address specified in `ADMIN_EMAIL`.

