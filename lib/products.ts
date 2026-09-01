export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export const products: Product[] = [
  { id: "p1", name: "test", price: 1800, image: "/products/p1.png" },
  { id: "p2", name: "test", price: 1800, image: "/products/p2.png" },
  { id: "p3", name: "test", price: 1800, image: "/products/p3.png" },
  { id: "p4", name: "test", price: 1800, image: "/products/p4.png" },
  { id: "p5", name: "test", price: 1800, image: "/products/p5.png" },
  { id: "p6", name: "test", price: 1800, image: "/products/p6.png" },
];
