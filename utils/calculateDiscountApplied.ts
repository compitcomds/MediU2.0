export default function calculateDiscountApplied(
  subtotal: string | number,
  total: string | number,
) {
  const subtotalAmount =
    typeof subtotal === "string" ? parseFloat(subtotal) : subtotal;
  const totalAmount = typeof total === "string" ? parseFloat(total) : total;

  return 100 - (totalAmount * 100) / subtotalAmount;
}
