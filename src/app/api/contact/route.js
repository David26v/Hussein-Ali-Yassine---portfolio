import resend from "@/lib/resend";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, subject, message } = body;

    if (!name || !email || !company || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const data = await resend.emails.send({
      from: "Hussein Ali Yassine <mike@husseinaliyassine.com>",
      to: ["mike@husseinaliyassine.com"],
      subject: `New Consultation Request from ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Consultation Request</title>
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
              color: #e2e8f0;
              padding: 40px 20px;
              line-height: 1.6;
            }
            .container {
              max-width: 650px;
              margin: 0 auto;
              background: #1e293b;
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
              border: 1px solid rgba(148, 163, 184, 0.1);
            }
            .header {
              background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
              padding: 48px 40px;
              text-align: center;
              position: relative;
              overflow: hidden;
            }
            .header::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
              opacity: 0.3;
            }
            .header-content {
              position: relative;
              z-index: 1;
            }
            .header h1 {
              font-size: 32px;
              font-weight: 700;
              color: #ffffff;
              margin-bottom: 8px;
              letter-spacing: -0.5px;
            }
            .header p {
              font-size: 16px;
              color: rgba(255, 255, 255, 0.9);
              font-weight: 400;
            }
            .content {
              padding: 40px;
            }
            .status-badge {
              display: inline-block;
              background: linear-gradient(135deg, #10b981 0%, #059669 100%);
              color: white;
              padding: 12px 24px;
              border-radius: 8px;
              font-weight: 600;
              font-size: 14px;
              margin-bottom: 32px;
              box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
            }
            .info-grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 20px;
              margin-bottom: 32px;
            }
            .info-card {
              background: #0f172a;
              padding: 24px;
              border-radius: 12px;
              border: 1px solid rgba(148, 163, 184, 0.1);
              transition: transform 0.2s ease;
            }
            .info-label {
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 1px;
              color: #94a3b8;
              margin-bottom: 8px;
              font-weight: 600;
            }
            .info-value {
              font-size: 16px;
              color: #f1f5f9;
              font-weight: 500;
              word-break: break-word;
            }
            .message-card {
              background: #0f172a;
              padding: 28px;
              border-radius: 12px;
              border: 1px solid rgba(59, 130, 246, 0.2);
              border-left: 4px solid #3b82f6;
            }
            .message-label {
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 1px;
              color: #60a5fa;
              margin-bottom: 12px;
              font-weight: 600;
            }
            .message-text {
              font-size: 15px;
              color: #e2e8f0;
              line-height: 1.7;
              white-space: pre-wrap;
            }
            .footer {
              background: #0f172a;
              padding: 32px 40px;
              text-align: center;
              border-top: 1px solid rgba(148, 163, 184, 0.1);
            }
            .footer-brand {
              font-size: 20px;
              font-weight: 700;
              color: #3b82f6;
              margin-bottom: 8px;
            }
            .footer-text {
              font-size: 14px;
              color: #64748b;
              margin-top: 4px;
            }
            .divider {
              height: 1px;
              background: linear-gradient(90deg, transparent, rgba(148, 163, 184, 0.2), transparent);
              margin: 32px 0;
            }
            .service-badge {
              display: inline-block;
              background: rgba(59, 130, 246, 0.1);
              color: #60a5fa;
              padding: 8px 16px;
              border-radius: 6px;
              font-size: 14px;
              font-weight: 600;
              margin-top: 8px;
            }
            @media (max-width: 600px) {
              .info-grid {
                grid-template-columns: 1fr;
              }
              .content {
                padding: 24px;
              }
              .header {
                padding: 32px 24px;
              }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="header-content">
                <h1>New Consultation Request</h1>
                <p>A potential client has reached out for your services</p>
              </div>
            </div>

            <div class="content">
              <div class="status-badge">
                ✓ New Submission
              </div>

              <div class="info-grid">
                <div class="info-card">
                  <div class="info-label">Client Name</div>
                  <div class="info-value">${name}</div>
                </div>
                <div class="info-card">
                  <div class="info-label">Email Address</div>
                  <div class="info-value">${email}</div>
                </div>
                <div class="info-card">
                  <div class="info-label">Company</div>
                  <div class="info-value">${company}</div>
                </div>
                <div class="info-card">
                  <div class="info-label">Service Requested</div>
                  <div class="info-value">${subject}</div>
                </div>
              </div>

              <div class="divider"></div>

              <div class="message-card">
                <div class="message-label">Project Details & Requirements</div>
                <div class="message-text">${message}</div>
              </div>
            </div>

            <div class="footer">
              <div class="footer-brand">Hussein Ali Yassine</div>
              <div class="footer-text">Business Consulting & Strategic Advisory</div>
              <div class="footer-text" style="margin-top: 16px;">© ${new Date().getFullYear()} All rights reserved.</div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return new Response(
      JSON.stringify({ success: true, data }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error("Resend error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email" }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}