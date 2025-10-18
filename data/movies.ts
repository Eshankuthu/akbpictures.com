export interface Movie {
  id: number;
  title: string;
  year: string;
  category: string;
  director: string;
  thumbnail: string;
  description: string;
  trailerUrl?: string;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "Naka",
    year: "2024",
    category: "Feature Film",
    director: "AKB Pictures",
    thumbnail: "/images/naka-poster.jpeg",
    description: "An intense thriller that takes you through the checkpoints of life, where every decision matters and every moment counts.",
    trailerUrl: "https://www.youtube.com/watch?v=u2gbhTlEbAE",
  },
  {
    id: 2,
    title: "Viral Gorkhe",
    year: "2024",
    category: "Drama",
    director: "AKB Pictures",
    thumbnail: "/images/viral-gorkhe.png",
    description: "A powerful story of fame, ambition, and the price of viral success in the modern digital age.",
    trailerUrl: "https://www.youtube.com/watch?v=mwTW5jP9wxg",
  },
  {
    id: 3,
    title: "The Whole Timers",
    year: "2017",
    category: "Coming-of-Age War Film",
    director: "Pooja Gurung & Bibhusen Basnet",
    thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&q=80",
    description: "A groundbreaking coming-of-age war film and the first Nepali feature to receive CNC Production Aid. Featured in Cannes Cinefondation L'Atelier (2016), Locarno Open Doors Lab (2017), and Film Bazaar (2017). Winner of the HBF Script and Development Award and Cam-a-lot & Filmmore Cinema Emerging Talent Prize at The Holland Film Meeting.",
    trailerUrl: "",
  },
];
