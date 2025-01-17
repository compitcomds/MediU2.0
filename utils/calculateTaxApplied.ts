export default function calculateTaxApplied(
  items: Array<{
    cost: { amount: string | number };
    gstApplied: number;
    quantity: number;
  }>,
  discountApplied?: number,
): number {
  let totalTax = 0;

  for (const item of items) {
    const costAmount =
      typeof item.cost.amount === "string"
        ? parseFloat(item.cost.amount)
        : item.cost.amount;

    const taxAmountPerItem =
      (costAmount * item.gstApplied) / (100 + item.gstApplied);
    totalTax += taxAmountPerItem * item.quantity;
  }

  if (!!discountApplied) {
    totalTax *= (100 - discountApplied) / 100;
  }

  return totalTax;
}
