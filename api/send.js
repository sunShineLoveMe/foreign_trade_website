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
                from: 'SunShine Love Me <onboarding@resend.dev>',
                to: ['ibuildhouse7@gmail.com'],
                subject: `New Contact Form Submission: ${productType}`,
                html: `
          <h3>New Website Inquiry</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Company:</strong> ${company || 'N/A'}</p>
          <p><strong>Product Type:</strong> ${productType}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
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
