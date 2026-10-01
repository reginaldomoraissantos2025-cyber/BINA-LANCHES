export interface OrderItem {
  name: string;
  quantity: number;
  price: string;
}

export type OrderStatus = "pendente" | "em_preparo" | "concluido";

export interface Order {
  id: string;
  customerName: string;
  whatsapp: string;
  items: OrderItem[];
  total: string;
  status: OrderStatus;
  receivedAt: string;
  notes?: string;
}

export const WHATSAPP_NUMBER = "45998147483";

export const orders: Order[] = [
  {
    id: "1",
    customerName: "João Pereira",
    whatsapp: "45999112233",
    items: [
      { name: "Lanche Super", quantity: 2, price: "R$ 36,00" },
      { name: "Coca-Cola Lata", quantity: 2, price: "R$ 12,00" },
    ],
    total: "R$ 48,00",
    status: "pendente",
    receivedAt: "2024-06-01 19:32",
    notes: "Sem cebola em um dos lanches",
  },
  {
    id: "2",
    customerName: "Maria Souza",
    whatsapp: "45988776655",
    items: [
      { name: "X-Bacon", quantity: 1, price: "R$ 20,00" },
      { name: "Suco Natural", quantity: 1, price: "R$ 8,00" },
    ],
    total: "R$ 28,00",
    status: "em_preparo",
    receivedAt: "2024-06-01 19:40",
  },
  {
    id: "3",
    customerName: "Carlos Lima",
    whatsapp: "45991234567",
    items: [
      { name: "X-Salada", quantity: 3, price: "R$ 48,00" },
      { name: "Água Mineral", quantity: 3, price: "R$ 12,00" },
    ],
    total: "R$ 60,00",
    status: "concluido",
    receivedAt: "2024-06-01 18:55",
  },
];
