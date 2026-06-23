export type Category = "chit-mato" | "atlas" | "gilam-mato" | "sitsa";

export type Product = {
  id: number;
  slug: string;
  name: string;
  category: Category;
  price: number;
  unit: string;
  image: string;
  description: string;
};

export const categories = [
  { value: "all", label: "Hammasi" },
  { value: "chit-mato", label: "Chit mato" },
  { value: "atlas", label: "Atlas" },
  { value: "gilam-mato", label: "Gilam mato" },
  { value: "sitsa", label: "Sitsa" },
] as const;

export const products: Product[] = [
  {
    id: 1,
    slug: "namangan-chit-mato",
    name: "Namangan Chit Mato",
    category: "chit-mato",
    price: 18000,
    unit: "metr",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    description: "Yuqori sifatli Namangan ishlab chiqarishi, 100% paxta.",
  },
  {
    id: 2,
    slug: "samarqand-atlas",
    name: "Samarqand Atlas",
    category: "atlas",
    price: 65000,
    unit: "metr",
    image: "https://images.unsplash.com/photo-1586495777744-4e6232bf2b18?w=600&q=80",
    description: "An'anaviy Samarqand atlasi, ipak aralashma.",
  },
  {
    id: 3,
    slug: "buxoro-gilam-mato",
    name: "Buxoro Gilam Mato",
    category: "gilam-mato",
    price: 95000,
    unit: "metr",
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&q=80",
    description: "Qalin to'qilgan gilam mato, issiqlik ushlab turadi.",
  },
  {
    id: 4,
    slug: "toshkent-sitsa",
    name: "Toshkent Sitsa",
    category: "sitsa",
    price: 12000,
    unit: "metr",
    image: "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=600&q=80",
    description: "Yengil va nafis, yozgi kiyim uchun ideal.",
  },
  {
    id: 5,
    slug: "fargona-chit-mato",
    name: "Farg'ona Chit Mato",
    category: "chit-mato",
    price: 22000,
    unit: "metr",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    description: "Farg'ona vodiysi paxtasidan, yumshoq va bardoshli.",
  },
  {
    id: 6,
    slug: "margilan-atlas",
    name: "Marg'ilon Atlas",
    category: "atlas",
    price: 78000,
    unit: "metr",
    image: "https://images.unsplash.com/photo-1586495777744-4e6232bf2b18?w=600&q=80",
    description: "Marg'ilon atlasi — rangli naqsh, bayramlik ko'rinish.",
  },
  {
    id: 7,
    slug: "qoqon-gilam-mato",
    name: "Qo'qon Gilam Mato",
    category: "gilam-mato",
    price: 88000,
    unit: "metr",
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&q=80",
    description: "Qo'qon ustalari tomonidan to'qilgan, an'anaviy naqsh.",
  },
  {
    id: 8,
    slug: "andijon-sitsa",
    name: "Andijon Sitsa",
    category: "sitsa",
    price: 14000,
    unit: "metr",
    image: "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=600&q=80",
    description: "Andijon to'qimachilik fabrikasi, chidamli va arzon.",
  },
];
