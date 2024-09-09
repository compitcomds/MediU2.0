export type CartItemType = {
  title: string;
  id: string;
  handle: string;
  image: {
    url: string;
    altText: string;
    width: number;
    height: number;
  };
  selectedOptions: Array<{ name: string; value: string }>;
  quantity: number;
  lineId: string;
  cost: { amount: number; currencyCode: string };
  quantityAvailable: number;
  currentlyNotInStock: boolean;
};
