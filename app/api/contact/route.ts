import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpHost || !smtpUser || !smtpPass) {
      return NextResponse.json({ error: "SMTP not configured" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const from = `"TrueDrop Support" <${smtpUser}>`;
    const toAdmin = process.env.CONTACT_TO_EMAIL || "truedrop1975@gmail.com";
    const logoPath = `${process.cwd()}/public/assets/images/logo/trueDrop-logo.svg`;

    const adminHtml = `
    <div style="background-color:#F9FBFA;padding:24px">
      <div style="max-width:600px;margin:0 auto;background:#FFFFFF;border:1px solid #EAECF0;border-radius:16px;overflow:hidden">
        <div style="background:#3C886B;padding:20px 24px;color:#FFFFFF">
          <table width="100%" style="border-collapse:collapse"><tr>
            <td style="text-align:left"><img src="cid:logo" alt="TrueDrop" style="height:32px"></td>
            <td style="text-align:right;font-size:14px;opacity:.9">Support Notification</td>
          </tr></table>
        </div>
        <div style="padding:24px;color:#21212C;font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif">
          <h1 style="margin:0 0 12px;font-size:20px">New Contact Submission</h1>
          <p style="margin:0 0 16px;font-size:14px;color:#475467">You received a new inquiry. Details below.</p>
          <table style="width:100%;border-collapse:collapse;margin:0 0 16px">
            <tr><td style="padding:8px 0;color:#67677E;font-size:14px">Name</td><td style="padding:8px 0;font-size:14px;color:#21212C">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#67677E;font-size:14px">Email</td><td style="padding:8px 0;font-size:14px;color:#21212C">${email}</td></tr>
            <tr><td style="padding:8px 0;color:#67677E;font-size:14px">Subject</td><td style="padding:8px 0;font-size:14px;color:#21212C">${subject || "General Question"}</td></tr>
          </table>
          <div style="background:#FAF9FB;border:1px solid #EAECF0;border-radius:12px;padding:16px;color:#21212C;font-size:14px;line-height:1.6">${message.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>
          <div style="margin-top:20px">
            <a href="mailto:${email}?subject=Re:%20[Contact]%20${encodeURIComponent(subject || "General Question")}" style="display:inline-block;background:#2EB88A;color:#FFFFFF;padding:10px 16px;border-radius:8px;font-size:14px;text-decoration:none">Reply</a>
          </div>
        </div>
        <div style="padding:16px 24px;background:#F9FBFA;color:#67677E;font-size:12px">© 2026 TrueDrop. All rights reserved.</div>
      </div>
    </div>`;

    const clientHtml = `
    <div style="background-color:#F9FBFA;padding:24px">
      <div style="max-width:600px;margin:0 auto;background:#FFFFFF;border:1px solid #EAECF0;border-radius:16px;overflow:hidden">
        <div style="background:#3C886B;padding:20px 24px;color:#FFFFFF">
          <table width="100%" style="border-collapse:collapse"><tr>
            <td style="text-align:left"><img src="cid:logo" alt="TrueDrop" style="height:32px"></td>
            <td style="text-align:right;font-size:14px;opacity:.9">We received your message</td>
          </tr></table>
        </div>
        <div style="padding:24px;color:#21212C;font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif">
          <h1 style="margin:0 0 12px;font-size:20px">Thanks for reaching out</h1>
          <p style="margin:0 0 12px;font-size:14px;color:#475467">Hi ${name || "there"}, thanks for contacting TrueDrop. We’ve received your message and our team will reply soon.</p>
          <div style="background:#FAF9FB;border:1px solid #EAECF0;border-radius:12px;padding:16px;color:#21212C;font-size:14px;line-height:1.6">${message.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>
          <p style="margin:16px 0 0;font-size:14px;color:#475467">If you need to add more details, simply reply to this email.</p>
          <div style="margin-top:20px">
            <a href="mailto:${toAdmin}" style="display:inline-block;background:#2EB88A;color:#FFFFFF;padding:10px 16px;border-radius:8px;font-size:14px;text-decoration:none">Reply</a>
          </div>
        </div>
        <div style="padding:16px 24px;background:#F9FBFA;color:#67677E;font-size:12px">© 2026 TrueDrop. All rights reserved.</div>
      </div>
    </div>`;

    const attachments = [{ filename: "logo.svg", path: logoPath, cid: "logo" }];

    const adminMail = {
      from,
      to: toAdmin,
      subject: `[Contact] ${subject || "General Question"}`,
      replyTo: email,
      text: `New contact submission:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: adminHtml,
      attachments,
    };

    const clientMail = {
      from,
      to: email,
      subject: "Thanks for reaching out to TrueDrop",
      text: `Hi ${name || ""},\n\nWe received your message:\n"${message}"\n\nOur team will get back to you soon.\n\n— TrueDrop Support`,
      html: clientHtml,
      attachments,
    };

    await Promise.all([transporter.sendMail(adminMail), transporter.sendMail(clientMail)]);

    return NextResponse.json({ status: "sent" }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}