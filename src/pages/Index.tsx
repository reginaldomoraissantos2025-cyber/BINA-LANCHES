import { Link } from "react-router-dom";
import { menu } from "@/data/menu";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground bg-amber-50">
      <header className="py-8 text-center bg-amber-600 text-white px-4 space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold">Bina Lanches</h1>
        <p className="mt-2 text-sm sm:text-base">Lanche Super</p>
        <div className="flex flex-wrap justify-center gap-2">
          <Link
            to="/preferencias"
            className="inline-block bg-white text-amber-700 px-4 py-2 rounded-md font-medium text-sm hover:bg-amber-50 transition"
          >
            Minhas Preferências
          </Link>
          <Link
            to="/admin"
            className="inline-block bg-white text-amber-700 px-4 py-2 rounded-md font-medium text-sm hover:bg-amber-50 transition"
          >
            Admin
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8 space-y-10">
        {menu.map((section) => (
          <section key={section.title}>
            <h2 className="text-2xl font-semibold mb-4 border-b-2 border-amber-500 pb-2">
              {section.title}
            </h2>
            <div className="space-y-4">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 bg-white rounded-lg p-4 shadow-sm min-w-0"
                >
                  <div className="flex items-start gap-4 min-w-0">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md flex-shrink-0"
                      />
                    )}
                    <div className="min-w-0">
                      <h3 className="font-medium text-lg">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <span className="font-semibold text-amber-700 whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default Index;
