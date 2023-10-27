interface Apartment {
  id: number;
  img: string;
  address: string;
  price: number;
  options: { bed: number; shower: number; size: number };
}

type Apartments = Apartment[];

export const featuredApatments: Apartments = [
  {
    id: 1,
    img: "/images/house1.webp",
    address: "2578 Folsom street, san francisco, CA, 94110",
    price: 1200,
    options: { bed: 4, shower: 2, size: 2 },
  },
  {
    id: 2,
    img: "/images/house2.webp",
    address: "2578 Folsom street, san francisco, CA, 94110",
    price: 1000,
    options: { bed: 3, shower: 2, size: 2 },
  },
  {
    id: 3,
    img: "/images/house3.webp",
    address: "2578 Folsom street, san francisco, CA, 94110",
    price: 800,
    options: { bed: 2, shower: 1, size: 2 },
  },
  {
    id: 4,
    img: "/images/house4.webp",
    address: "2578 Folsom street, san francisco, CA, 94110",
    price: 600,
    options: { bed: 1, shower: 1, size: 1 },
  },
  {
    id: 5,
    img: "/images/house5.webp",
    address: "2578 Folsom street, san francisco, CA, 94110",
    price: 2200,
    options: { bed: 5, shower: 3, size: 2 },
  },
  {
    id: 6,
    img: "/images/house6.webp",
    address: "2578 Folsom street, san francisco, CA, 94110",
    price: 1100,
    options: { bed: 3, shower: 2, size: 2 },
  },
  {
    id: 7,
    img: "/images/house1.webp",
    address: "2578 Folsom street, san francisco, CA, 94110",
    price: 1150,
    options: { bed: 3, shower: 2, size: 2 },
  },
  {
    id: 8,
    img: "/images/house2.webp",
    address: "2578 Folsom street, san francisco, CA, 94110",
    price: 1200,
    options: { bed: 4, shower: 2, size: 2 },
  },
  {
    id: 9,
    img: "/images/house3.webp",
    address: "2578 Folsom street, san francisco, CA, 94110",
    price: 1200,
    options: { bed: 4, shower: 2, size: 2 },
  },
  {
    id: 10,
    img: "/images/house4.webp",
    address: "2578 Folsom street, san francisco, CA, 94110",
    price: 1200,
    options: { bed: 4, shower: 2, size: 2 },
  },
  {
    id: 11,
    img: "/images/house5.webp",
    address: "2578 Folsom street, san francisco, CA, 94110",
    price: 1200,
    options: { bed: 4, shower: 2, size: 2 },
  },
  {
    id: 12,
    img: "/images/house6.webp",
    address: "2578 Folsom street, san francisco, CA, 94110",
    price: 1200,
    options: { bed: 4, shower: 2, size: 2 },
  },
];
