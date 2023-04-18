// Dummy data for orders
export const orders = [
  {
    id: 1,
    order_date: "2022-02-15",
    status: "Delivered",
    order_lines: [
      { id: 1, order_id: 1, product_id: 1, quantity: 2 },
      { id: 2, order_id: 1, product_id: 2, quantity: 1 },
    ],
  },
  {
    id: 2,
    order_date: "2022-03-01",
    status: "In Transit",
    order_lines: [
      { id: 3, order_id: 2, product_id: 3, quantity: 3 },
      { id: 4, order_id: 2, product_id: 4, quantity: 2 },
    ],
  },
];

// Dummy data for products
export const products = [
  { id: 1, name: "Latte", price: 3.5 },
  { id: 2, name: "Cappuccino", price: 3 },
  { id: 3, name: "Espresso", price: 2 },
  { id: 4, name: "Mocha", price: 4 },
];
