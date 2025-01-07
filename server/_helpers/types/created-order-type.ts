type CreatedOrderType = {
  id: string;
  email: string;
  phone: string | null;
  name: string;
  line_items: Array<{
    id: number;
    current_quantity: number;
    grams: number;
    name: string;
    price: string;
    product_exists: boolean;
    quantity: number;
    sku: string | null;
    taxable: boolean;
    title: string;
    total_discount: string;
  }>;
};

export default CreatedOrderType;
