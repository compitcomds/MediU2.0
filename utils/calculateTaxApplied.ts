export default function calculateTaxApplied(
  items: Array<{
    cost: { amount: string | number };
    gstApplied: number;
    quantity: number;
  }>,
): number {
  return items.reduce((totalTax, item) => {
    const costAmount =
      typeof item.cost.amount === "string"
        ? parseFloat(item.cost.amount)
        : item.cost.amount;

    const taxAmountPerItem =
      (costAmount * item.gstApplied) / (100 + item.gstApplied);
    const taxForQuantity = taxAmountPerItem * item.quantity;

    return totalTax + taxForQuantity;
  }, 0);
}
