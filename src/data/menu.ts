import { Diet, Flavor, Intolerance } from "./preferences";

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: string;
  diets?: Diet[];
  intolerances?: Intolerance[];
  flavors?: Flavor[];
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export const menu: MenuSection[] = [
  {
    title: "Lanches",
    items: [
      {
        name: "Lanche Super",
        description: "Pão, carne, queijo, alface, tomate e molho especial",
        price: "R$ 18,00",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
        diets: ["nenhuma"],
        intolerances: ["gluten", "lactose"],
        flavors: ["salgado", "defumado"],
      },
      {
        name: "X-Bacon",
        description: "Pão, carne, queijo, bacon crocante e maionese",
        price: "R$ 20,00",
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop",
        diets: ["nenhuma"],
        intolerances: ["gluten", "lactose"],
        flavors: ["salgado", "defumado", "picante"],
      },
      {
        name: "X-Salada",
        description: "Pão, carne, queijo, alface, tomate e cebola",
        price: "R$ 16,00",
        image: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=400&h=300&fit=crop",
        diets: ["vegetariano"],
        intolerances: ["gluten", "lactose"],
        flavors: ["salgado"],
      },
    ],
  },
  {
    title: "Bebidas",
    items: [
      {
        name: "Coca-Cola Lata",
        description: "350ml gelada",
        price: "R$ 6,00",
        diets: ["vegano", "vegetariano"],
        flavors: ["doce"],
      },
      {
        name: "Guaraná Antarctica Lata",
        description: "350ml gelado",
        price: "R$ 6,00",
        diets: ["vegano", "vegetariano"],
        flavors: ["doce"],
      },
      {
        name: "Suco Natural",
        description: "Laranja, abacaxi ou maracujá - 500ml",
        price: "R$ 8,00",
        diets: ["vegano", "vegetariano", "low_carb"],
        flavors: ["doce"],
      },
      {
        name: "Água Mineral",
        description: "500ml com ou sem gás",
        price: "R$ 4,00",
        diets: ["vegano", "vegetariano", "low_carb"],
        flavors: [],
      },
      {
        name: "Milkshake",
        description: "Chocolate, morango ou baunilha - 400ml",
        price: "R$ 12,00",
        diets: ["vegetariano"],
        intolerances: ["lactose"],
        flavors: ["doce"],
      },
    ],
  },
];
