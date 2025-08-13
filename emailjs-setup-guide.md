# EmailJS Setup Guide for Contact Form

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your email account
5. Note down your **Service ID** (e.g., "service_abc123")

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Message: {{subject}}

**Body:**
```
You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. Save the template and note down your **Template ID** (e.g., "template_xyz789")

## Step 4: Get Your Public Key
1. Go to "Account" > "General"
2. Find your **Public Key** (e.g., "user_abc123xyz")

## Step 5: Update Your HTML File
Replace the following placeholders in your `index.html` file:

1. Line with `emailjs.init("YOUR_PUBLIC_KEY");`
   - Replace `YOUR_PUBLIC_KEY` with your actual public key

2. Line with `emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)`
   - Replace `YOUR_SERVICE_ID` with your service ID
   - Replace `YOUR_TEMPLATE_ID` with your template ID

## Example Configuration
```javascript
// Initialize EmailJS
emailjs.init("user_abc123xyz");

// Send email
emailjs.send('service_gmail123', 'template_contact456', templateParams)
```

## Step 6: Test Your Form
1. Open your website
2. Fill out the contact form
3. Submit and check your email inbox
4. You should receive the message within a few minutes

## Features Included
- ✅ Form validation (required fields + email format)
- ✅ Loading state during submission
- ✅ Success/error notifications
- ✅ Fallback to mailto if EmailJS fails
- ✅ Professional email template
- ✅ Form reset after successful submission

## Troubleshooting
- **Emails not arriving**: Check your spam folder
- **"User ID is required" error**: Make sure you've set your public key correctly
- **Template errors**: Verify your template ID and template variable names match
- **Service errors**: Ensure your email service is properly connected

## Free Plan Limits
- 200 emails per month
- Perfect for portfolio contact forms
- Upgrade available if you need more

Your contact form is now ready to receive emails directly to your inbox!
