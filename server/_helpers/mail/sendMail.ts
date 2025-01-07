import { createTransport, TransportOptions } from "nodemailer";
import CreatedOrderType from "../types/created-order-type";

export async function sendMail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  const transporter = createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  } as TransportOptions);

  const info = await transporter.sendMail({
    from: "Mediu 🏥",
    to,
    subject,
    html,
  });
  return info;
}

export default async function sendOrderCreatedEmail(
  order: CreatedOrderType,
  subject?: string,
) {
  const html = generateOrderEmail(order);
  await sendMail({
    to: String(process.env.NEW_ORDER_CREATED_EMAIL),
    subject: subject || `New Order Recieved`,
    html,
  });
}

export function generateOrderEmail({
  id,
  email,
  phone,
  name,
  line_items,
}: CreatedOrderType): string {
  const orderTableRows = line_items
    .map(
      (item) => `
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 8px; text-align: left;">${item.name}</td>
          <td style="padding: 8px; text-align: center;">${item.quantity}</td>
          <td style="padding: 8px; text-align: center;">${item.price}</td>
          <td style="padding: 8px; text-align: center;">${item.total_discount}</td>
        </tr>
      `,
    )
    .join("");

  return `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            margin: 0;
            padding: 20px;
          }
          .container {
            max-width: 600px;
            margin: auto;
            background-color: #ffffff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            border-radius: 8px;
            overflow: hidden;
          }
          .header {
            background-color: #238878;
            color: #ffffff;
            text-align: center;
            padding: 20px;
          }
          .content {
            padding: 20px;
          }
          .footer {
            background-color: #f1f1f1;
            text-align: center;
            padding: 10px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
          }
          th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
          }
          th {
            background-color: #238878;
            color: white;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Order Received</h1>
          </div>
          <div class="content">
            <p><strong>Order ID:</strong> ${id}</p>
            <p><strong>Customer Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "N/A"}</p>
            <h3>Order Details</h3>
            <table>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total Discount</th>
                </tr>
              </thead>
              <tbody>
                ${orderTableRows}
              </tbody>
            </table>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Your Company. All Rights Reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;
}
