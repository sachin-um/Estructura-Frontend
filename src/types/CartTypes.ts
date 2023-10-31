interface CartItem {
  itemId: number;
  quantity: number;
}

interface CartRequest {
  customer_id: number;
  shoppingCartItems: CartItem[];
  total: number;
}

interface CheckoutRequest {
  totalPrice: number;
  customer_id: number;
  shoppingCartItems: CartItem[];
}

interface OrderEntity {
  id: number;
  quantity: number;
}

interface Order {
  id: number;
  total: number;
  dateAdded: Date;
  orderItems: OrderEntity[];
  createdBy: number;
}
