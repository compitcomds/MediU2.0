import { type CartItemType } from "~/shopify/_types/cart";

export default function convertCartLinesToCartItemType(
  nodes: Array<any>
): Array<CartItemType> {
  const items = nodes.map((node) => ({
    title: node.merchandise.product.title,
    selectedOptions: node.merchandise.selectedOptions,
    image: node.merchandise.image,
    handle: node.merchandise.product.handle,
    id: node.merchandise.id,
    quantity: node.quantity,
    lineId: node.id,
    cost: node.cost.amountPerQuantity,
    quantityAvailable: node.merchandise.quantityAvailable,
    currentlyNotInStock: node.merchandise.currentlyNotInStock,
  }));
  return items;
}
