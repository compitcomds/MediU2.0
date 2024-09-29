export type ShopifyImageType = {
  url: string;
  altText: string | null;
  height: number;
  width: number;
};

export type CartItemType = {
  title: string;
  id: string;
  handle: string;
  image: ShopifyImageType;
  selectedOptions: Array<{ name: string; value: string }>;
  quantity: number;
  lineId: string;
  cost: { amount: number; currencyCode: string };
  quantityAvailable: number;
  currentlyNotInStock: boolean;
};

export type MailingAddressInput = {
  address1: string;
  address2?: string;
  city: string;
  company?: string;
  country: string;
  firstName: string;
  lastName: string;
  phone: string;
  province: string;
  zip: string;
};
