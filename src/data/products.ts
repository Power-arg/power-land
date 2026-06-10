import proteinaStarVainilla from "@/assets/products/proteina-star-vainilla.png";
import proteinaStarFrutilla from "@/assets/products/proteina-star-frutilla.png";
import proteinaStarChocolate from "@/assets/products/proteina-star-chocolate.png";
import proteinaStarCookies from "@/assets/products/proteina-star-cookies.png";
import proteinaStarPoteVainilla from "@/assets/products/proteina-star-pote-vainilla.png";
import proteinaEnaTruemadeChocolate from "@/assets/products/proteina-ena-truemade-chocolate.png";
import proteinaEnaTruemadeVainilla from "@/assets/products/proteina-ena-truemade-vainilla.png";
import porteinaEnaTruemadeChocolate2 from "@/assets/products/proteina-ena-truemade2lb-chocolate.png";
import porteinaEnaTruemadeVainilla2 from "@/assets/products/proteina-ena-truemade2lb-vainilla.png";
import proteinaEna100Vainilla from "@/assets/products/proteina-ena-100-vainilla.png";
import proteinaEna100Chocolate from "@/assets/products/proteina-ena-100-choco.png";
import proteinaBodyAdvanceDdl from "@/assets/products/proteina-body-advance-ddl.png";
import proteinaBodyAdvanceVll from "@/assets/products/proteina-body-advance-vll.png";
import ultraMassEnaChocolate from "@/assets/products/ultramass-ena-choco.png";
import ultraMassEnaChocolate15 from "@/assets/products/ultramass-ena-choco15.png";
import ultraMassEnaVainilla from "@/assets/products/ultramass-ena-vainilla15.png";

import creatinaStar from "@/assets/products/creatina-star.png";
import creatinaEna from "@/assets/products/creatina-ena.png";
import creatinaBodyAdvance from "@/assets/products/creatina-body-advance.png";
import creatinaGentech from "@/assets/products/creatina-gentech.png";
import creatinaEnaFruitPunch from "@/assets/products/creatina-ena-fruitpunch.png";

import barritasGrowsbarChocolateCaja from "@/assets/products/growsbar-choco-caja.png";
import barritasGrowsbarChocolate from "@/assets/products/growsbar-choco.png";
import barritasGrowsbarFrutillaCaja from "@/assets/products/growsbar-frutilla-caja.png";
import barritasGrowsbarFrutilla from "@/assets/products/growsbar-frutilla.png";
import barritasGrowsbarCocoCaja from "@/assets/products/growsbar-coco-caja.png";
import barritasGrowsbarCoco from "@/assets/products/growsbar-coco.png";
import barritasGrowsbarCoookiesCaja from "@/assets/products/growsbar-cookies-caja.png";
import barritasGrowsbarCoookies from "@/assets/products/growsbar-cookies.png";
import barritasCruddaAvellanaChcolateCaja from "@/assets/products/crudda-avellanachoco-caja.png";
import barritasCruddaAvellanaChcolate from "@/assets/products/crudda-avellanachoco.png";
import barritasCruddaArandanosNuezCaja from "@/assets/products/crudda-arandanosnuez-caja.png";
import barritasCruddaArandanosNuez from "@/assets/products/crudda-arandanosnuez.png";
import barritasCruddaPeanutCaramelCaja from "@/assets/products/crudda-peanutcaramel-caja.png";
import barritasCruddaPeanutCaramel from "@/assets/products/crudda-peanutcaramel.png";
import barritasCruddaCocoChocolateCaja from "@/assets/products/crudda-coco-caja.png";
import barritasCruddaCocoChocolate from "@/assets/products/crudda-coco.png";
import barritasCruddaBrownieCaja from "@/assets/products/crudda-brownie-caja.png";
import barritasCruddaBrownie from "@/assets/products/crudda-brownie.png";
import barritasCruddaBananaCaja from "@/assets/products/crudda-banana-caja.png";
import barritasCruddaBanana from "@/assets/products/crudda-banana.png";
import barritasIntegraArandanosCaja from "@/assets/products/integra-caja-arandanos.png";
import barritasIntegraArandanos from "@/assets/products/integra-arandanos.png";
import barritasIntegraManiCaja from "@/assets/products/integra-caja-mani.png";
import barritasIntegraMani from "@/assets/products/integra-mani.png";

import pancakesGrangerChocolate from "@/assets/products/pancakes-granger-choco.png";
import pancakesGrangerVainilla from "@/assets/products/pancakes-granger-vainilla.png";

import shakerEna from "@/assets/products/shaker-ena.png";
import magnesioEna from "@/assets/products/magnesio-ena.png";
import omega3Star from "@/assets/products/omega3-star.png";

import preEntrenoEnaFruitPunch from "@/assets/products/preentreno-ena-fruitpunch.png";
import preEntrenoEnaLimon from "@/assets/products/preentreno-ena-limon.png";
import preEntrenoStarSandia from "@/assets/products/preentreno-star-sandia.png";
import preEntrenoStarLimon from "@/assets/products/preentreno-star-limon.png";
import preEntrenoStarAcai from "@/assets/products/preentreno-star-acai.png";
import preEntrenoStarUva from "@/assets/products/preentreno-star-uva.png";

import colagenStarLimon from "@/assets/products/collagen-star-limon.png";
import colagenStarFrutosRojos from "@/assets/products/collagen-star-frutosrojos.png";
import colagenoOneFitNaranja from "@/assets/products/colageno-onefit-naranja.png";

import gelNaranja from "@/assets/products/gel-naranja.png";
import gelesNaranja from "@/assets/products/geles-naranja.png";
import gelTriberry from "@/assets/products/gel-triberry.png";
import gelesTriberry from "@/assets/products/geles-triberry.png";
import gelNeutro from "@/assets/products/gel-neutro.png";
import gelesNeutro from "@/assets/products/geles-neutro.png";
import gelesChocoEndurance from "@/assets/products/geles-choco-endurance.png";
import gelChocoEndurance from "@/assets/products/gel-choco-endurance.png";

import granolaPastamani from "@/assets/products/granola-pastamani.png";
import granolaBanana from "@/assets/products/granola-banana.png";

export interface Product {
  id: string;
  name: string;
  brand: string;
  size: string;
  flavor?: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  category: "proteinas" | "creatinas" | "pre entrenos" | "barritas" | "granolas" | "pancakes" | "geles" | "colagenos" | "otros";
}

export const products: Product[] = [
  // PROTEINAS
  {
    id: "whey-star-frutilla",
    name: "Whey Protein DoyPack 2Lb",
    brand: "Star Nutrition",
    size: "910gr",
    flavor: "Frutilla",
    price: 50000,
    image: proteinaStarFrutilla,
    category: "proteinas",
  },
  {
    id: "whey-star-vainilla",
    name: "Whey Protein DoyPack 2Lb",
    brand: "Star Nutrition",
    size: "910gr",
    flavor: "Vainilla",
    price: 50000,
    image: proteinaStarVainilla,
    category: "proteinas",
  },
  {
    id: "whey-star-chocolate",
    name: "Whey Protein DoyPack 2Lb",
    brand: "Star Nutrition",
    size: "910gr",
    flavor: "Chocolate",
    price: 50000,
    image: proteinaStarChocolate,
    category: "proteinas",
  },
  {
    id: "whey-star-cookies",
    name: "Whey Protein DoyPack 2Lb",
    brand: "Star Nutrition",
    size: "910gr",
    flavor: "Cookies and Cream",
    price: 50000,
    image: proteinaStarCookies,
    category: "proteinas",
  },
  /*{
    id: "whey-star-pote-vainilla",
    name: "Whey Protein Platinum 2Lb",
    brand: "Star Nutrition",
    size: "910gr",
    flavor: "Vainilla",
    price: 55000,
    image: proteinaStarPoteVainilla,
    category: "proteinas",
  },*/
  {
    id: "whey-ena-truemade-vainilla",
    name: "Whey Protein Truemade DoyPack 1Lb",
    brand: "ENA",
    size: "455gr",
    flavor: "Vainilla",
    price: 35000,
    image: proteinaEnaTruemadeVainilla,
    category: "proteinas",
  },
  {
    id: "whey-ena-truemade-chocolate",
    name: "Whey Protein Truemade DoyPack 1Lb",
    brand: "ENA",
    size: "455gr",
    flavor: "Chocolate",
    price: 35000,
    image: proteinaEnaTruemadeChocolate,
    category: "proteinas",
  },
  {
    id: "whey-ena-truemade2lb-chocolate",
    name: "Whey Protein Truemade 2Lb",
    brand: "ENA",
    size: "910gr",
    flavor: "Chocolate",
    price: 60000,
    image: porteinaEnaTruemadeChocolate2,
    category: "proteinas",
  },
  {
    id: "whey-ena-truemade2lb-vainilla",
    name: "Whey Protein Truemade 2Lb",
    brand: "ENA",
    size: "910gr",
    flavor: "Vainilla",
    price: 60000,
    image: porteinaEnaTruemadeVainilla2,
    category: "proteinas",
  },
  {
    id: "whey-ena-100-chocolate",
    name: "Whey Protein 100% Whey 2Lb",
    brand: "ENA",
    size: "910gr",
    flavor: "Chocolate",
    price: 49000,
    image: proteinaEna100Chocolate,
    category: "proteinas",
  },
  {
    id: "whey-ena-100-vainilla",
    name: "Whey Protein 100% Whey 2Lb",
    brand: "ENA",
    size: "910gr",
    flavor: "Vainilla",
    price: 49000,
    image: proteinaEna100Vainilla,
    category: "proteinas",
  },
  {
    id: "ultramass-ena-chocolate",
    name: "Ultra Mass Weight Gainer 3kg",
    brand: "ENA",
    size: "3kg",
    flavor: "Chocolate",
    price: 80000,
    image: ultraMassEnaChocolate,
    category: "proteinas",
  },
  {
    id: "ultramass-ena-chocolate15",
    name: "Ultra Mass Weight Gainer 1.5kg",
    brand: "ENA",
    size: "1.5kg",
    flavor: "Chocolate",
    price: 46000,
    image: ultraMassEnaChocolate15,
    category: "proteinas",
  },
  {
    id: "ultramass-ena-vainilla15",
    name: "Ultra Mass Weight Gainer 1.5kg",
    brand: "ENA",
    size: "1.5kg",
    flavor: "Vainilla",
    price: 46000,
    image: ultraMassEnaVainilla,
    category: "proteinas",
  },
  {
    id: "whey-body-advance-ddl",
    name: "Whey Protein Gold Line 2Lb",
    brand: "Body Advance",
    size: "910gr",
    flavor: "Dulce de leche",
    price: 35000,
    image: proteinaBodyAdvanceDdl,
    category: "proteinas",
  },
  {
    id: "whey-body-advance-vainilla",
    name: "Whey Protein Gold Line 2Lb",
    brand: "Body Advance",
    size: "910gr",
    flavor: "Vainilla",
    price: 35000,
    image: proteinaBodyAdvanceVll,
    category: "proteinas",
  },
  // CREATINAS
  {
    id: "creatina-star",
    name: "Creatina Monohidratada DoyPack",
    brand: "Star Nutrition",
    size: "300gr",
    flavor: "Sin sabor",
    price: 28500,
    image: creatinaStar,
    category: "creatinas",
  },
  {
    id: "creatina-ena",
    name: "Creatina Monohidratada DoyPack",
    brand: "ENA",
    size: "300gr",
    flavor: "Sin sabor",
    price: 29000,
    image: creatinaEna,
    category: "creatinas",
  },
  {
    id: "creatina-ena-fruitpunch",
    name: "Creatina FruitPunch DoyPack",
    brand: "ENA",
    size: "300gr",
    flavor: "Fruit Punch",
    price: 29000,
    image: creatinaEnaFruitPunch,
    category: "creatinas",
  },
  /*{
    id: "creatina-body-advance",
    name: "Creatina Monohidratada DoyPack",
    brand: "Body Advance",
    size: "300gr",
    price: 19200,
    image: creatinaBodyAdvance,
    category: "creatinas",
  },*/
  {
    id: "creatina-gentech",
    name: "Creatina Monohidrato DoyPack",
    brand: "Gentech",
    size: "250gr",
    flavor: "Sin sabor",
    price: 27500,
    image: creatinaGentech,
    category: "creatinas",
  },
  // OTROS
  {
    id: "magnesio-ena",
    name: "Magnesio Citrato Capsulas",
    brand: "ENA",
    size: "60 Caps",
    price: 16000,
    image: magnesioEna,
    category: "otros"
  },
  {
    id: "omega3-Star",
    name: "Omega 3 fish oil capsulas",
    brand: "Star Nutrition",
    size: "60 Caps",
    price: 32000,
    image: omega3Star,
    category: "otros"
  },
  {
    id: "shaker-ena",
    name: "Shaker",
    brand: "ENA",
    size: "500ml",
    price: 8000,
    image: shakerEna,
    category: "otros"
  },
  // PRE ENTRENOS
  {
    id: "preentreno-ena-fruitpunch",
    name: "Pre-Entreno PreWar Fruit Punch",
    brand: "ENA",
    size: "400gr",
    flavor: "Fruit Punch",
    price: 31000,
    image: preEntrenoEnaFruitPunch,
    category: "pre entrenos"
  },
  {
    id: "preentreno-ena-limon",
    name: "Pre-Entreno PreWar Lemonade",
    brand: "ENA",
    size: "400gr",
    flavor: "Limon",
    price: 31000,
    image: preEntrenoEnaLimon,
    category: "pre entrenos"
  },
  {
    id: "preentreno-star-acai",
    name: "Pre-Entreno Pump V8 Açaí Power",
    brand: "Star Nutrition",
    size: "285gr",
    flavor: "Açaí",
    price: 33000,
    image: preEntrenoStarAcai,
    category: "pre entrenos"
  },
  {
    id: "preentreno-star-uva",
    name: "Pre-Entreno Pump V8 Grape Attack",
    brand: "Star Nutrition",
    size: "285gr",
    flavor: "Uva",
    price: 33000,
    image: preEntrenoStarUva,
    category: "pre entrenos"
  },
  {
    id: "preentreno-star-limon",
    name: "Pre-Entreno Pump V8 Citrus Slush",
    brand: "Star Nutrition",
    size: "285gr",
    flavor: "Limon",
    price: 33000,
    image: preEntrenoStarLimon,
    category: "pre entrenos"
  },
  {
    id: "preentreno-star-sandia",
    name: "Pre-Entreno Pump V8 Watermelon",
    brand: "Star Nutrition",
    size: "285gr",
    flavor: "Sandía",
    price: 33000,
    image: preEntrenoStarSandia,
    category: "pre entrenos"
  },
  // COLÁGENOS
  {
    id: "colageno-star-limon",
    name: "Colágeno Hidrolizado",
    brand: "Star Nutrition",
    size: "210gr",
    flavor: "Limón",
    price: 23000,
    image: colagenStarLimon,
    category: "colagenos"
  },
  {
    id: "colageno-star-frutosrojos",
    name: "Colágeno Hidrolizado",
    brand: "Star Nutrition",
    size: "210gr",
    flavor: "Frutos Rojos",
    price: 23000,
    image: colagenStarFrutosRojos,
    category: "colagenos"
  },
  {
    id: "colageno-onefit-naranja",
    name: "Colágeno Hidrolizado",
    brand: "One Fit Nutrition",
    size: "240gr",
    flavor: "Naranja",
    price: 20000,
    image: colagenoOneFitNaranja,
    category: "colagenos"
  },
  // GELES
  {
    id: "gel-naranja",
    name: "Gel Energético Energy",
    brand: "Nutremax",
    size: "42gr",
    flavor: "Naranja con cafeína",
    price: 2400,
    image: gelNaranja,
    category: "geles"
  },
  {
    id: "geles-naranja",
    name: "Geles Energéticos Energy",
    brand: "Nutremax",
    size: "12 x 42gr",
    flavor: "Naranja con cafeína",
    price: 25000,
    image: gelesNaranja,
    category: "geles"
  },
  {
    id: "gel-triberry",
    name: "Gel Energético Energy",
    brand: "Nutremax",
    size: "42gr",
    flavor: "Triberry con cafeína",
    price: 2400,
    image: gelTriberry,
    category: "geles"
  },
  {
    id: "geles-triberry",
    name: "Geles Energéticos Energy",
    brand: "Nutremax",
    size: "12 x 42gr",
    flavor: "Triberry con cafeína",
    price: 25000,
    image: gelesTriberry,
    category: "geles"
  },
  {
    id: "gel-neutro",
    name: "Gel Energético Energy",
    brand: "Nutremax",
    size: "42gr",
    flavor: "Sin sabor sin cafeína",
    price: 2400,
    image: gelNeutro,
    category: "geles"
  },
  {
    id: "geles-neutro",
    name: "Geles Energéticos Energy",
    brand: "Nutremax",
    size: "12 x 42gr",
    flavor: "Sin sabor sin cafeína",
    price: 25000,
    image: gelesNeutro,
    category: "geles"
  },
  {
    id: "gel-chocoendurance",
    name: "Gel Energético Endurance",
    brand: "Nutremax",
    size: "42gr",
    flavor: "Chocolate con cafeína",
    price: 2500,
    image: gelChocoEndurance,
    category: "geles"
  },
  {
    id: "geles-chocoendurance",
    name: "Geles Energéticos Endurance",
    brand: "Nutremax",
    size: "12 x 42gr",
    flavor: "Chocolate con cafeína",
    price: 28000,
    image: gelesChocoEndurance,
    category: "geles"
  },
  // PANCAKES
  {
    id: "pancakes-granger-vainilla",
    name: "Pancakes Proteicos Granger",
    brand: "Granger",
    size: "400gr",
    flavor: "Vainilla",
    price: 16500,
    image: pancakesGrangerVainilla,
    category: "pancakes"
  },
  {
    id: "pancakes-granger-chocolate",
    name: "Pancakes Proteicos Granger",
    brand: "Granger",
    size: "400gr",
    flavor: "Chocolate",
    price: 16500,
    image: pancakesGrangerChocolate,
    category: "pancakes"
  },
  // GRANOLAS
  {
    id: "granola-pastamani",
    name: "Granola Proteica",
    brand: "Integra",
    size: "250gr",
    flavor: "Pasta de Mani",
    price: 9000,
    image: granolaPastamani,
    category: "granolas"
  },
  {
    id: "granola-banana",
    name: "Granola Proteica",
    brand: "Integra",
    size: "250gr",
    flavor: "Banana y Chocolate",
    price: 9000,
    image: granolaBanana,
    category: "granolas"
  },
  // BARRITAS
  {
    id: "barritas-integra-mani-caja",
    name: "Integra Barra Proteica Caja",
    brand: "Integra",
    size: "10 x 45gr",
    flavor: "Maní y Chocolate",
    price: 22000,
    image: barritasIntegraManiCaja,
    category: "barritas"
  },
  {
    id: "barritas-integra-mani-chocolate",
    name: "Integra Barra Proteica",
    brand: "Integra",
    size: "45gr",
    flavor: "Maní y Chocolate",
    price: 2400,
    image: barritasIntegraMani,
    category: "barritas"
  },
  {
    id: "barritas-integra-arandanos-caja",
    name: "Integra Barra Proteica Caja",
    brand: "Integra",
    size: "10 x 45gr",
    flavor: "Maní y Arándanos",
    price: 22000,
    image: barritasIntegraArandanosCaja,
    category: "barritas"
  },
  {
    id: "barritas-integra-avellana-chocolate",
    name: "Integra Barra Proteica",
    brand: "Integra",
    size: "45gr",
    flavor: "Pasta de Maní y Arándanos",
    price: 2400,
    image: barritasIntegraArandanos,
    category: "barritas"
  },
  {
    id: "barritas-crudda-avellana-chocolate-caja",
    name: "Crudda Barra Proteica Caja",
    brand: "Crudda",
    size: "10 x 40gr",
    flavor: "Avellana y Chocolate",
    price: 22000,
    image: barritasCruddaAvellanaChcolateCaja,
    category: "barritas"
  },
  {
    id: "barritas-crudda-avellana-chocolate",
    name: "Crudda Barra Proteica",
    brand: "Crudda",
    size: "40gr",
    flavor: "Avellana y Chocolate",
    price: 2400,
    image: barritasCruddaAvellanaChcolate,
    category: "barritas"
  },
  {
    id: "barritas-crudda-brownie-caja",
    name: "Crudda Barra Proteica Caja",
    brand: "Crudda",
    size: "10 x 40gr",
    flavor: "Brownie",
    price: 22000,
    image: barritasCruddaBrownieCaja,
    category: "barritas"
  },
  {
    id: "barritas-crudda-brownie",
    name: "Crudda Barra Proteica",
    brand: "Crudda",
    size: "40gr",
    flavor: "Brownie",
    price: 2400,
    image: barritasCruddaBrownie,
    category: "barritas"
  },
  {
    id: "barritas-crudda-arandanos-nuez-caja",
    name: "Crudda Barra Proteica Caja",
    brand: "Crudda",
    size: "10 x 40gr",
    flavor: "Arándanos y Nuez",
    price: 22000,
    image: barritasCruddaArandanosNuezCaja,
    category: "barritas"
  },
  {
    id: "barritas-crudda-arandanos-nuez",
    name: "Crudda Barra Proteica",
    brand: "Crudda",
    size: "40gr",
    flavor: "Arándanos y Nuez",
    price: 2400,
    image: barritasCruddaArandanosNuez,
    category: "barritas"
  },
  {
    id: "barritas-crudda-peanut-caramel-caja",
    name: "Crudda Barra Proteica Caja",
    brand: "Crudda",
    size: "10 x 40gr",
    flavor: "Peanut Caramel",
    price: 22000,
    image: barritasCruddaPeanutCaramelCaja,
    category: "barritas"
  },
  {
    id: "barritas-crudda-peanut-caramel",
    name: "Crudda Barra Proteica",
    brand: "Crudda",
    size: "40gr",
    flavor: "Peanut Caramel",
    price: 2400,
    image: barritasCruddaPeanutCaramel,
    category: "barritas"
  },
  {
    id: "barritas-crudda-banana-caja",
    name: "Crudda Barra Proteica Caja",
    brand: "Crudda",
    size: "10 x 40gr",
    flavor: "Banana Toffee",
    price: 22000,
    image: barritasCruddaBananaCaja,
    category: "barritas"
  },
  {
    id: "barritas-crudda-banana",
    name: "Crudda Barra Proteica",
    brand: "Crudda",
    size: "40gr",
    flavor: "Banana Toffee",
    price: 2400,
    image: barritasCruddaBanana,
    category: "barritas"
  },
  {
    id: "barritas-crudda-coco-chocolate-caja",
    name: "Crudda Barra Proteica Caja",
    brand: "Crudda",
    size: "10 x 40gr",
    flavor: "Coco y Chocolate",
    price: 22000,
    image: barritasCruddaCocoChocolateCaja,
    category: "barritas"
  },
  {
    id: "barritas-crudda-coco-chocolate",
    name: "Crudda Barra Proteica",
    brand: "Crudda",
    size: "40gr",
    flavor: "Coco y Chocolate",
    price: 2400,
    image: barritasCruddaCocoChocolate,
    category: "barritas"
  },
  {
    id: "barritas-growsbar-cookies-caja",
    name: "Growsbar Barra Proteica Caja",
    brand: "Growsbar",
    size: "12 x 46gr",
    flavor: "Cookies and Cream",
    price: 24000,
    image: barritasGrowsbarCoookiesCaja,
    category: "barritas",
  },
  {
    id: "barritas-growsbar-cookies",
    name: "Growsbar Barra Proteica",
    brand: "Growsbar",
    size: "46gr",
    flavor: "Cookies and Cream",
    price: 2300,
    image: barritasGrowsbarCoookies,
    category: "barritas"
  },
  {
    id: "barritas-growsbar-chocolate-caja",
    name: "Growsbar Barra Proteica Caja",
    brand: "Growsbar",
    size: "12 x 46gr",
    flavor: "Chocolate",
    price: 24000,
    image: barritasGrowsbarChocolateCaja,
    category: "barritas",
  },
  {
    id: "barritas-growsbar-chocolate",
    name: "Growsbar Barra Proteica",
    brand: "Growsbar",
    size: "46gr",
    flavor: "Chocolate",
    price: 2300,
    image: barritasGrowsbarChocolate,
    category: "barritas"
  },
  {
    id: "barritas-growsbar-frutilla-caja",
    name: "Growsbar Barra Proteica Caja",
    brand: "Growsbar",
    size: "12 x 46gr",
    flavor: "Frutilla",
    price: 24000,
    image: barritasGrowsbarFrutillaCaja,
    category: "barritas"
  },
  {
    id: "barritas-growsbar-frutilla",
    name: "Growsbar Barra Proteica",
    brand: "Growsbar",
    size: "46gr",
    flavor: "Frutilla",
    price: 2300,
    image: barritasGrowsbarFrutilla,
    category: "barritas"
  },
  {
    id: "barritas-growsbar-coco-caja",
    name: "Growsbar Barra Proteica Caja",
    brand: "Growsbar",
    size: "12 x 46gr",
    flavor: "Coco",
    price: 24000,
    image: barritasGrowsbarCocoCaja,
    category: "barritas"
  },
  {
    id: "barritas-growsbar-coco",
    name: "Growsbar Barra Proteica",
    brand: "Growsbar",
    size: "46gr",
    flavor: "Coco",
    price: 2300,
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
