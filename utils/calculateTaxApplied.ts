export default function calculateTaxApplied(
  items: Array<{
    cost: { amount: string | number };
    gstApplied: number;
    quantity: number;
  }>,
): number {
  return items.reduce((totalTax, item) => {
    const cost =
      typeof item.cost.amount === "string"
        ? parseFloat(item.cost.amount)
        : item.cost.amount;
    const gst = item.gstApplied / 100;
    const taxForItem = cost * item.quantity * gst;
    return totalTax + taxForItem;
  }, 0);
}
