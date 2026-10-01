import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { menu, MenuItem } from "@/data/menu";
import {
  Diet,
  Flavor,
  Intolerance,
  dietOptions,
  intoleranceOptions,
  flavorOptions,
} from "@/data/preferences";

const Preferences = () => {
  const [diet, setDiet] = useState<Diet>("nenhuma");
  const [intolerances, setIntolerances] = useState<Intolerance[]>([]);
  const [flavors, setFlavors] = useState<Flavor[]>([]);

  const toggleIntolerance = (value: Intolerance) => {
    setIntolerances((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const toggleFlavor = (value: Flavor) => {
    setFlavors((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const recommendations = useMemo(() => {
    const allItems: MenuItem[] = menu.flatMap((section) => section.items);

    return allItems.filter((item) => {
      if (diet !== "nenhuma" && !(item.diets || []).includes(diet)) {
        return false;
      }

      const hasBlockedIntolerance = intolerances.some((i) =>
        (item.intolerances || []).includes(i)
      );
      if (hasBlockedIntolerance) {
        return false;
      }

      if (flavors.length > 0) {
        const matchesFlavor = flavors.some((f) => (item.flavors || []).includes(f));
        if (!matchesFlavor) {
          return false;
        }
      }

      return true;
    });
  }, [diet, intolerances, flavors]);

  return (
    <div className="min-h-screen bg-background text-foreground bg-amber-50">
      <header className="py-6 bg-amber-600 text-white px-4">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="min-w-0">
            <h1 className="text-2xl sm:text-3xl font-bold">Minhas Preferências</h1>
            <p className="text-sm sm:text-base opacity-90">
              Escolha sua dieta, intolerâncias e sabores favoritos
            </p>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <Link
              to="/"
              className="inline-block bg-white text-amber-700 px-4 py-2 rounded-md font-medium text-sm hover:bg-amber-50 transition"
            >
              Cardápio
            </Link>
            <Link
              to="/admin"
              className="inline-block bg-white text-amber-700 px-4 py-2 rounded-md font-medium text-sm hover:bg-amber-50 transition"
            >
              Admin
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8 space-y-8">
        <section className="bg-white rounded-lg p-4 shadow-sm space-y-4">
          <div>
            <h2 className="font-semibold text-lg mb-2">Dieta</h2>
            <div className="flex flex-wrap gap-2">
              {dietOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setDiet(opt.value)}
                  className={`px-3 py-1.5 rounded-full text-sm border transition ${
                    diet === opt.value
                      ? "bg-amber-600 text-white border-amber-600"
                      : "border-amber-300 text-amber-700 hover:bg-amber-50"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">Intolerâncias</h2>
            <div className="flex flex-wrap gap-2">
              {intoleranceOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => toggleIntolerance(opt.value)}
                  className={`px-3 py-1.5 rounded-full text-sm border transition ${
                    intolerances.includes(opt.value)
                      ? "bg-red-600 text-white border-red-600"
                      : "border-red-300 text-red-700 hover:bg-red-50"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">Sabores preferidos</h2>
            <div className="flex flex-wrap gap-2">
              {flavorOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => toggleFlavor(opt.value)}
                  className={`px-3 py-1.5 rounded-full text-sm border transition ${
                    flavors.includes(opt.value)
                      ? "bg-amber-600 text-white border-amber-600"
                      : "border-amber-300 text-amber-700 hover:bg-amber-50"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-amber-500 pb-2">
            Recomendações para você
          </h2>
          {recommendations.length === 0 ? (
            <p className="text-center text-gray-600">
              Nenhum item encontrado com essas preferências. Tente ajustar os filtros.
            </p>
          ) : (
            <div className="space-y-4">
              {recommendations.map((item) => (
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
          )}
        </section>
      </main>
    </div>
  );
};

export default Preferences;
