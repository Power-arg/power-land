import proteinaStarVainilla from "@/assets/products/proteina-star-vainilla.png";
import proteinaStarFrutilla from "@/assets/products/proteina-star-frutilla.png";
import proteinaEnaTruemadeChocolate from "@/assets/products/proteina-ena-truemade-chocolate.png";
import proteinaEnaTruemadeVainilla from "@/assets/products/proteina-ena-truemade-vainilla.png";
import porteinaEnaTruemadeChocolate2 from "@/assets/products/proteina-ena-truemade2lb-chocolate.png";
import proteinaEna100Vainilla from "@/assets/products/proteina-ena-100-vainilla.png";
import proteinaEna100Chocolate from "@/assets/products/proteina-ena-100-choco.png";
import proteinaBodyAdvanceDdl from "@/assets/products/proteina-body-advance-ddl.png";
import proteinaBodyAdvanceVll from "@/assets/products/proteina-body-advance-vll.png";

import creatinaStar from "@/assets/products/creatina-star.png";
import creatinaEna from "@/assets/products/creatina-ena.png";
import creatinaBodyAdvance from "@/assets/products/creatina-body-advance.png";
import creatinaGentech from "@/assets/products/creatina-gentech.png";

import barritasGrowsbarChocolateCaja from "@/assets/products/growsbar-choco-caja.png";
import barritasGrowsbarChocolate from "@/assets/products/growsbar-choco.png";
import barritasGrowsbarFrutillaCaja from "@/assets/products/growsbar-frutilla-caja.png";
import barritasGrowsbarFrutilla from "@/assets/products/growsbar-frutilla.png";
import barritasGrowsbarCocoCaja from "@/assets/products/growsbar-coco-caja.png";
import barritasGrowsbarCoco from "@/assets/products/growsbar-coco.png";
import barritasCruddaAvellanaChcolateCaja from "@/assets/products/crudda-avellanachoco-caja.png";
import barritasCruddaAvellanaChcolate from "@/assets/products/crudda-avellanachoco.png";
import barritasCruddaArandanosNuezCaja from "@/assets/products/crudda-arandanosnuez-caja.png";
import barritasCruddaArandanosNuez from "@/assets/products/crudda-arandanosnuez.png";
import barritasCruddaPeanutCaramelCaja from "@/assets/products/crudda-peanutcaramel-caja.png";
import barritasCruddaPeanutCaramel from "@/assets/products/crudda-peanutcaramel.png";
import barritasCruddaCocoChocolateCaja from "@/assets/products/crudda-coco-caja.png";
import barritasCruddaCocoChocolate from "@/assets/products/crudda-coco.png";

import shakerEna from "@/assets/products/shaker-ena.png";
import magnesioEna from "@/assets/products/magnesio-ena.png";
import colagenStarLimon from "@/assets/products/collagen-star-limon.png";

export interface Product {
  id: string;
  name: string;
  brand: string;
  size: string;
  flavor?: string;
  price: number;
  image: string;
  category: "proteina" | "creatina" | "barritas" | "otros";
}

export const products: Product[] = [
  // Proteinas
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
    id: "whey-ena-truemade2lb-chocolate",
    name: "Whey Protein Truemade DoyPack 2Lb",
    brand: "ENA",
    size: "910gr",
    flavor: "Chocolate",
    price: 49000,
    image: porteinaEnaTruemadeChocolate2,
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
  {
    id: "creatina-gentech",
    name: "Creatina Monohidrato DoyPack",
    brand: "Gentech",
    size: "250gr",
    price: 27000,
    image: creatinaGentech,
    category: "creatina",
  },
  // Otros
  {
    id: "shaker-ena",
    name: "Shaker",
    brand: "ENA",
    size: "500ml",
    price: 7000,
    image: shakerEna,
    category: "otros"
  },
  {
    id: "magnesio-ena",
    name: "Magnesio Citrato Capsulas",
    brand: "ENA",
    size: "60 Caps",
    price: 15000,
    image: magnesioEna,
    category: "otros"
  },
  {
    id: "colageno-star-limon",
    name: "Colágeno Hidrolizado",
    brand: "Star Nutrition",
    size: "210gr",
    price: 22000,
    image: colagenStarLimon,
    category: "otros"
  },
  // Barritas
  {
    id: "barritas-crudda-avellana-chocolate-caja",
    name: "Crudda Barra Proteica Caja",
    brand: "Crudda",
    size: "10 x 40gr",
    flavor: "Avellana y Chocolate",
    price: 20000,
    image: barritasCruddaAvellanaChcolateCaja,
    category: "barritas"
  },
  {
    id: "barritas-crudda-avellana-chocolate",
    name: "Crudda Barra Proteica",
    brand: "Crudda",
    size: "40gr",
    flavor: "Avellana y Chocolate",
    price: 2200,
    image: barritasCruddaAvellanaChcolate,
    category: "barritas"
  },
  {
    id: "barritas-crudda-arandanos-nuez-caja",
    name: "Crudda Barra Proteica Caja",
    brand: "Crudda",
    size: "10 x 40gr",
    flavor: "Arándanos y Nuez",
    price: 20000,
    image: barritasCruddaArandanosNuezCaja,
    category: "barritas"
  },
  {
    id: "barritas-crudda-arandanos-nuez",
    name: "Crudda Barra Proteica",
    brand: "Crudda",
    size: "40gr",
    flavor: "Arándanos y Nuez",
    price: 2200,
    image: barritasCruddaArandanosNuez,
    category: "barritas"
  },
  {
    id: "barritas-crudda-peanut-caramel-caja",
    name: "Crudda Barra Proteica Caja",
    brand: "Crudda",
    size: "10 x 40gr",
    flavor: "Peanut Caramel",
    price: 20000,
    image: barritasCruddaPeanutCaramelCaja,
    category: "barritas"
  },
  {
    id: "barritas-crudda-peanut-caramel",
    name: "Crudda Barra Proteica",
    brand: "Crudda",
    size: "40gr",
    flavor: "Peanut Caramel",
    price: 2200,
    image: barritasCruddaPeanutCaramel,
    category: "barritas"
  },
  {
    id: "barritas-crudda-coco-chocolate-caja",
    name: "Crudda Barra Proteica Caja",
    brand: "Crudda",
    size: "10 x 40gr",
    flavor: "Coco y Chocolate",
    price: 20000,
    image: barritasCruddaCocoChocolateCaja,
    category: "barritas"
  },
  {
    id: "barritas-crudda-coco-chocolate",
    name: "Crudda Barra Proteica",
    brand: "Crudda",
    size: "40gr",
    flavor: "Coco y Chocolate",
    price: 2200,
    image: barritasCruddaCocoChocolate,
    category: "barritas"
  },
  {
    id: "barritas-growsbar-chocolate-caja",
    name: "Growsbar Barra Proteica Caja",
    brand: "Growsbar",
    size: "12 x 46gr",
    flavor: "Chocolate",
    price: 22000,
    image: barritasGrowsbarChocolateCaja,
    category: "barritas",
  },
  {
    id: "barritas-growsbar-chocolate",
    name: "Growsbar Barra Proteica",
    brand: "Growsbar",
    size: "46gr",
    flavor: "Chocolate",
    price: 2000,
    image: barritasGrowsbarChocolate,
    category: "barritas"
  },
  {
    id: "barritas-growsbar-frutilla-caja",
    name: "Growsbar Barra Proteica Caja",
    brand: "Growsbar",
    size: "12 x 46gr",
    flavor: "Frutilla",
    price: 22000,
    image: barritasGrowsbarFrutillaCaja,
    category: "barritas"
  },
  {
    id: "barritas-growsbar-frutilla",
    name: "Growsbar Barra Proteica",
    brand: "Growsbar",
    size: "46gr",
    flavor: "Frutilla",
    price: 2000,
    image: barritasGrowsbarFrutilla,
    category: "barritas"
  },
  {
    id: "barritas-growsbar-coco-caja",
    name: "Growsbar Barra Proteica Caja",
    brand: "Growsbar",
    size: "12 x 46gr",
    flavor: "Coco",
    price: 22000,
    image: barritasGrowsbarCocoCaja,
    category: "barritas"
  },
  {
    id: "barritas-growsbar-coco",
    name: "Growsbar Barra Proteica",
    brand: "Growsbar",
    size: "46gr",
    flavor: "Coco",
    price: 2000,
    image: barritasGrowsbarCoco,
    category: "barritas"
  }
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  }).format(price);
};
