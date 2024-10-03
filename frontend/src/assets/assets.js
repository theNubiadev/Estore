import asoOke from "./aso_oke.jpg";
import ash from "./ash.jpg";
import purpleGown from "./purpleFemaleGown.jpg";
import FalzAgbada1 from "./falzagbada1.jpg";
import FalzAgbada2 from "./falzagbada2.jpg";
import FalzAgbada3 from "./falzagbada3.jpg";
import BlueAgbada from "./blueMenAgbada.jpg";
import BlackAgbada from "./black11.jpg";
import BlackAgbada1 from "./black22.jpg";
import lemonFull from "./lemonfull.jpg";
import lemonmain from "./lemonmain.jpg";
import blueIroBuba from "./blueIro_Buba.jpg";
import orandeGown from "./orangeFemaleGown.jpg";






export const products = [
  {
    _id: "a1",
    name: "White Agbada",
    description: "Aso oke made agbada with the best quality ",
    price: "500000",
    image: [ash],
    category: "Men",
    subCategory: "Full",
    sizes: ["M ", "L", "XL"],
    date: 13092024,
    bestSeller: true,
    sales: true,
  },
  {
    _id: "a2",
    name: "Buba and Sokoto",
    description: "Aso oke made agbada with the best quality ",
    price: "80000",
    image: [BlackAgbada, BlackAgbada1],
    category: "Men",
    subCategory: "Causual",
    sizes: ["L ", "XL", "XXL"],
    date: 13092024,
    bestSeller: true,
    sales: false,
  },
  {
    _id: "a3",
    name: " Iro and Buba",
    description: "Aso oke Iro and Buba ",
    price: "10000",
    image: [asoOke],
    category: "Women",
    subCategory: "Regalia",
    sizes: ["M ", "L", "XL"],
    date: 13092024,
    bestSeller: true,
    sales: true,
  },
  {
    _id: "a4",
    name: "Agbada with Buba and Sokoto",
    description: "Aso oke made agbada with the best quality ",
    price: "13000",
    image: [FalzAgbada1, FalzAgbada2, FalzAgbada3],
    category: "Boy",
    subCategory: "Regaila",
    sizes: ["M", "L", "XL"],
    date: 13092024,
    bestSeller: true,
    sales: true,
  },
  {
    _id: "a5",
    name: "Agbada with Buba and Sokoto",
    description: "Aso oke made agbada with the best quality ",
    price: "10000",
    image: [BlueAgbada],
    category: "Boy",
    subCategory: "Causual",
    sizes: ["XL", "XXL"],
    date: 13092024,
    bestSeller: true,
    sales: false,
  },
  {
    _id: "a6",
    name: " Iro and Buba",
    description: "Aso oke Iro and Buba ",
    price: "10000",
    image: [purpleGown],
    category: "Girl",
    subCategory: "Regalia",
    sizes: ["XL", "XXL"],
    date: 13092024,
    bestSeller: true,
    sales: true,
  },
  {
    _id: "a7",
    name: " Iro and Buba",
    description: "Aso oke Iro and Buba ",
    price: "12000",
    image: [blueIroBuba],
    category: "Women",
    subCategory: "Regalia",
    sizes: ["L ", "XL", "XXL"],
    date: 13092024,
    bestSeller: true,
    sales: true,
  },
  {
    _id: "a8",
    name: "Fila",
    description:
      "The Yoruba Cap that makes you a demon! with steeze on an 100% composure ",
    price: "15000",
    image: [],
    category: "Men",
    subCategory: "Regalia",
    sizes: ["L ", "XL"],
    date: 13092024,
    bestSeller: true,
    sales: true,
  },
  {
    _id: "a9",
    name: "Agbada Standalone",
    description:
      "The Yoruba Agbada that makes you a demon! with steeze on an 100% composure ",
    price: "75000",
    image: [lemonFull, lemonmain],
    category: "Men",
    subCategory: "Regalia",
    sizes: ["L ", "XL"],
    date: 13092024,
    bestSeller: false,
    sales: true,
  },
  {
    _id: "a10",
    name: "Orange Gown",
    description: "Aso oke Iro and Buba ",
    price: "10000",
    image: [orandeGown],
    category: "Girl",
    subCategory: "Regalia",
    sizes: ["XL", "XXL"],
    date: 13092024,
    bestSeller: true,
    sales: true,
  },
];
