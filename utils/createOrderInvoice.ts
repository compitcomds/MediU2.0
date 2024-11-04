import { PDFDocument, rgb } from "pdf-lib";

export default async function createOrderInvoice(payload: any) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 400]); // Set the page size

  // Set fonts and colors
  const fontSize = 12;
  const titleFontSize = 18;
  const headerColor = rgb(0, 0, 0); // Dark teal color

  // Helper function to draw text
  const drawText = (
    text: string,
    x: number,
    y: number,
    size: number,
    color: any,
  ) => {
    page.drawText(text, {
      x,
      y,
      size,
      color,
    });
  };

  // Draw company information
  drawText(payload.company.name, 50, 350, titleFontSize, headerColor);
  drawText(payload.company.address1, 50, 330, fontSize, rgb(0, 0, 0));
  drawText(payload.company.address2, 50, 315, fontSize, rgb(0, 0, 0));
  drawText(payload.company.phone, 50, 300, fontSize, rgb(0, 0, 0));
  drawText(payload.company.email, 50, 285, fontSize, rgb(0, 0, 0));
  drawText(payload.company.website, 50, 270, fontSize, rgb(0, 0, 0));
  drawText(payload.company.taxId, 50, 255, fontSize, rgb(0, 0, 0));

  // Draw customer information
  drawText("Bill To:", 300, 350, titleFontSize, headerColor);
  drawText(payload.customer.name, 300, 330, fontSize, rgb(0, 0, 0));
  drawText(payload.customer.address1, 300, 315, fontSize, rgb(0, 0, 0));
  drawText(payload.customer.address2, 300, 300, fontSize, rgb(0, 0, 0));
  drawText(payload.customer.phone, 300, 285, fontSize, rgb(0, 0, 0));
  drawText(payload.customer.email, 300, 270, fontSize, rgb(0, 0, 0));
  drawText(payload.customer.taxId, 300, 255, fontSize, rgb(0, 0, 0));

  // Draw invoice details
  drawText("Invoice Details", 50, 220, titleFontSize, headerColor);
  drawText(
    `Invoice Number: ${payload.invoice.number}`,
    50,
    200,
    fontSize,
    rgb(0, 0, 0),
  );
  drawText(
    `Invoice Date: ${payload.invoice.date}`,
    50,
    185,
    fontSize,
    rgb(0, 0, 0),
  );
  drawText(
    `Due Date: ${payload.invoice.dueDate}`,
    50,
    170,
    fontSize,
    rgb(0, 0, 0),
  );
  drawText(
    `Status: ${payload.invoice.status}`,
    50,
    155,
    fontSize,
    rgb(0, 0, 0),
  );
  drawText(
    `Total: ${payload.invoice.currency} ${payload.invoice.total.toFixed(2)}`,
    50,
    140,
    fontSize,
    rgb(0, 0, 0),
  );

  // Draw items table header
  drawText("Item", 50, 100, fontSize, headerColor);
  drawText("Quantity", 200, 100, fontSize, headerColor);
  drawText("Price", 300, 100, fontSize, headerColor);
  drawText("SGST", 400, 100, fontSize, headerColor);
  drawText("CGST", 480, 100, fontSize, headerColor);

  let y = 85;
  for (const item of payload.items) {
    const taxPercentage = item.tax; // Example tax calculation
    const sgst = taxPercentage / 2; // SGST
    const cgst = sgst; // CGST is the same as SGST

    drawText(item.name, 50, y, fontSize, rgb(0, 0, 0));
    drawText(item.quantity.toString(), 200, y, fontSize, rgb(0, 0, 0));
    drawText(
      `${payload.invoice.currency} ${item.price.toFixed(2)}`,
      300,
      y,
      fontSize,
      rgb(0, 0, 0),
    );
    drawText(`${sgst.toFixed(2)}%`, 400, y, fontSize, rgb(0, 0, 0));
    drawText(`${cgst.toFixed(2)}%`, 480, y, fontSize, rgb(0, 0, 0));
    y -= 15;
  }

  // Draw thank you note
  drawText(payload.note.text, 50, y - 20, fontSize, rgb(0, 0, 0));

  // Serialize the PDF document to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  const url = window.URL.createObjectURL(blob);
  return url;
}
