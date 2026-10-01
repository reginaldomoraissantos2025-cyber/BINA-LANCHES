export type Diet = "nenhuma" | "vegetariano" | "vegano" | "low_carb";

export type Intolerance = "gluten" | "lactose" | "amendoim";

export type Flavor = "picante" | "doce" | "salgado" | "defumado";

export interface UserPreferences {
  diet: Diet;
  intolerances: Intolerance[];
  flavors: Flavor[];
}

export const dietOptions: { value: Diet; label: string }[] = [
  { value: "nenhuma", label: "Sem restrição" },
  { value: "vegetariano", label: "Vegetariano" },
  { value: "vegano", label: "Vegano" },
  { value: "low_carb", label: "Low carb" },
];

export const intoleranceOptions: { value: Intolerance; label: string }[] = [
  { value: "gluten", label: "Glúten" },
  { value: "lactose", label: "Lactose" },
  { value: "amendoim", label: "Amendoim" },
];

export const flavorOptions: { value: Flavor; label: string }[] = [
  { value: "picante", label: "Picante" },
  { value: "doce", label: "Doce" },
  { value: "salgado", label: "Salgado" },
  { value: "defumado", label: "Defumado" },
];
