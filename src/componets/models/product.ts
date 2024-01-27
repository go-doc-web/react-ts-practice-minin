export interface IProduct {
  id: string;
  title: string;
  price: number;
  description: string;
  images: [
    "https://i.imgur.com/axsyGpD.jpeg",
    "https://i.imgur.com/T8oq9X2.jpeg",
    "https://i.imgur.com/J6MinJn.jpeg"
  ];
  creationAt: "2024-01-16T15:19:01.000Z";
  updatedAt: "2024-01-16T15:19:01.000Z";
  category: {
    id: 1;
    name: "Clothes";
    image: "https://i.imgur.com/QkIa5tT.jpeg";
    creationAt: "2024-01-16T15:19:01.000Z";
    updatedAt: "2024-01-16T15:19:01.000Z";
  };
}
