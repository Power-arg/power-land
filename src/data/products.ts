import proteinaStarVainilla from "@/assets/products/proteina-star-vainilla.png";
import proteinaStarFrutilla from "@/assets/products/proteina-star-frutilla.png";
import proteinaEnaTruemadeChocolate from "@/assets/products/proteina-ena-truemade-chocolate.png";
import proteinaEnaTruemadeVainilla from "@/assets/products/proteina-ena-truemade-vainilla.png";
import proteinaEna100Vainilla from "@/assets/products/proteina-ena-100-vainilla.png";
import proteinaEna100Chocolate from "@/assets/products/proteina-ena-100-choco.png";
import proteinaBodyAdvanceDdl from "@/assets/products/proteina-body-advance-ddl.png";
import proteinaBodyAdvanceVll from "@/assets/products/proteina-body-advance-vll.png";
import creatinaStar from "@/assets/products/creatina-star.png";
import creatinaEna from "@/assets/products/creatina-ena.png";
import creatinaBodyAdvance from "@/assets/products/creatina-body-advance.png";

export interface Product {
  id: string;
  name: string;
  brand: string;
  size: string;
  flavor?: string;
  price: number;
  image: string;
  category: "proteina" | "creatina";
}

export const products: Product[] = [
  // Whey Proteins
  {
    id: "whey-star-frutilla",
    name: "Whey Protein DoyPack 2Lb",
    brand: "Star Nutrition",
    size: "910gr",
    flavor: "Frutilla",
    price: 48000,
    image: proteinaStarFrutilla,
    category: "proteina",
  },
  {
    id: "whey-star-vainilla",
    name: "Whey Protein DoyPack 2Lb",
    brand: "Star Nutrition",
    size: "910gr",
    flavor: "Vainilla",
    price: 48000,
    image: proteinaStarVainilla,
    category: "proteina",
  },
  {
    id: "whey-ena-truemade-vainilla",
    name: "Whey Protein Truemade DoyPack 1Lb",
    brand: "ENA",
    size: "455gr",
    flavor: "Vainilla",
    price: 30200,
    image: proteinaEnaTruemadeVainilla,
    category: "proteina",
  },
  {
    id: "whey-ena-truemade-chocolate",
    name: "Whey Protein Truemade DoyPack 1Lb",
    brand: "ENA",
    size: "455gr",
    flavor: "Chocolate",
    price: 30200,
    image: proteinaEnaTruemadeChocolate,
    category: "proteina",
  },
  {
    id: "whey-ena-100-chocolate",
    name: "Whey Protein 100% Whey 2Lb",
    brand: "ENA",
    size: "910gr",
    flavor: "Chocolate",
    price: 43199,
    image: proteinaEna100Chocolate,
    category: "proteina",
  },
  {
    id: "whey-ena-100-vainilla",
    name: "Whey Protein 100% Whey 2Lb",
    brand: "ENA",
    size: "910gr",
    flavor: "Vainilla",
    price: 43199,
    image: proteinaEna100Vainilla,
    category: "proteina",
  },
  {
    id: "whey-body-advance-ddl",
    name: "Whey Protein Gold Line 2Lb",
    brand: "Body Advance",
    size: "910gr",
    flavor: "Dulce de leche",
    price: 29500,
    image: proteinaBodyAdvanceDdl,
    category: "proteina",
  },
  {
    id: "whey-body-advance-vainilla",
    name: "Whey Protein Gold Line 2Lb",
    brand: "Body Advance",
    size: "910gr",
    flavor: "Vainilla",
    price: 29500,
    image: proteinaBodyAdvanceVll,
    category: "proteina",
  },
  // Creatinas
  {
    id: "creatina-star",
    name: "Creatina Monohidratada DoyPack",
    brand: "Star Nutrition",
    size: "300gr",
    price: 27500,
    image: creatinaStar,
    category: "creatina",
  },
  {
    id: "creatina-ena",
    name: "Creatina Monohidratada DoyPack",
    brand: "ENA",
    size: "300gr",
    price: 28000,
    image: creatinaEna,
    category: "creatina",
  },
  {
    id: "creatina-body-advance",
    name: "Creatina Monohidratada DoyPack",
    brand: "Body Advance",
    size: "300gr",
    price: 19200,
    image: creatinaBodyAdvance,
    category: "creatina",
  },
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  }).format(price);
};
