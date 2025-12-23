export const config = {
  runtime: 'edge',
};

async function handleRequest(req) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { name, email, phone, company, productType, message } = await req.json();

    // The API key should be provided by the user in the Vercel environment variables or .env file
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      return new Response(JSON.stringify({ error: 'Resend API Key is not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: `Isupabuild <contact@isupabuild.com>`,
        to: ['ibuildhouse7@gmail.com'],
        reply_to: email, // This allows you to click "Reply" and message the user directly
        subject: `New Inquiry: ${name} - ${productType}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">New Website Inquiry</h2>
            <p>You have received a new message from your website contact form.</p>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9; width: 140px;"><strong>Name:</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Email:</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Phone:</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Company:</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">${company || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Product Type:</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">${productType}</td>
              </tr>
            </table>
            
            <h3 style="margin-top: 20px;">Message:</h3>
            <div style="padding: 15px; background: #f4f4f4; border-radius: 5px; border-left: 4px solid #2563eb;">
              ${message.replace(/\n/g, '<br>')}
            </div>
            
            <p style="margin-top: 30px; font-size: 0.8em; color: #777;">
              Tip: You can reply directly to this email to contact <strong>${name}</strong>.
            </p>
          </div>
        `,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      return new Response(JSON.stringify({ success: true, id: data.id }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new Response(JSON.stringify({ error: data.message || 'Failed to send email' }), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export default handleRequest;
