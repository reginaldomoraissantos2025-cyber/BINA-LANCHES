import { useState } from "react";
import { Link } from "react-router-dom";
import { orders as initialOrders, Order, OrderStatus, WHATSAPP_NUMBER } from "@/data/orders";

const statusLabels: Record<OrderStatus, string> = {
  pendente: "Pendente",
  em_preparo: "Em preparo",
  concluido: "Concluído",
};

const statusColors: Record<OrderStatus, string> = {
  pendente: "bg-red-100 text-red-700 border-red-300",
  em_preparo: "bg-amber-100 text-amber-700 border-amber-300",
  concluido: "bg-green-100 text-green-700 border-green-300",
};

const Admin = () => {
  const [orders, setOrders] = useState<Order[]>(initialOrders);

  const updateStatus = (id: string, status: OrderStatus) => {
    setOrders((prev) =>
      prev.map((order) => (order.id === id ? { ...order, status } : order))
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground bg-amber-50">
      <header className="py-6 bg-amber-600 text-white px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="min-w-0">
            <h1 className="text-2xl sm:text-3xl font-bold">Administração de Pedidos</h1>
            <p className="text-sm sm:text-base opacity-90">
              Pedidos recebidos via WhatsApp ({WHATSAPP_NUMBER})
            </p>
          </div>
          <Link
            to="/"
            className="inline-block bg-white text-amber-700 px-4 py-2 rounded-md font-medium text-sm hover:bg-amber-50 transition flex-shrink-0"
          >
            Ver cardápio
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-4">
        {orders.length === 0 && (
          <p className="text-center text-gray-600">Nenhum pedido recebido ainda.</p>
        )}

        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-lg p-4 shadow-sm space-y-3 min-w-0"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div className="min-w-0">
                <h2 className="font-semibold text-lg break-words">{order.customerName}</h2>
                <p className="text-sm text-gray-600">WhatsApp: {order.whatsapp}</p>
                <p className="text-xs text-gray-400">Recebido em {order.receivedAt}</p>
              </div>
              <span
                className={`inline-block border rounded-full px-3 py-1 text-xs font-medium self-start ${statusColors[order.status]}`}
              >
                {statusLabels[order.status]}
              </span>
            </div>

            <ul className="text-sm space-y-1">
              {order.items.map((item, idx) => (
                <li key={idx} className="flex justify-between gap-2">
                  <span className="min-w-0 break-words">
                    {item.quantity}x {item.name}
                  </span>
                  <span className="flex-shrink-0 font-medium">{item.price}</span>
                </li>
              ))}
            </ul>

            {order.notes && (
              <p className="text-sm italic text-gray-500">Obs: {order.notes}</p>
            )}

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2 border-t">
              <span className="font-semibold text-amber-700">Total: {order.total}</span>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => updateStatus(order.id, "pendente")}
                  className="px-3 py-1.5 rounded-md text-xs font-medium border border-red-300 text-red-700 hover:bg-red-50"
                >
                  Pendente
                </button>
                <button
                  onClick={() => updateStatus(order.id, "em_preparo")}
                  className="px-3 py-1.5 rounded-md text-xs font-medium border border-amber-300 text-amber-700 hover:bg-amber-50"
                >
                  Em preparo
                </button>
                <button
                  onClick={() => updateStatus(order.id, "concluido")}
                  className="px-3 py-1.5 rounded-md text-xs font-medium border border-green-300 text-green-700 hover:bg-green-50"
                >
                  Concluído
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Admin;
