export interface Movie {
  id: number;
  title: string;
  year: string;
  category: string;
  director: string;
  thumbnail: string;
  description: string;
  trailerUrl?: string;
  tiktokUrl?: string;
  instagramUrl?: string;
}

export const movies: Movie[] = [
  {
    id: 2,
    title: "Viral Gorkhey",
    year: "2026",
    category: "Drama",
    director: "Nigam shrestha",
    thumbnail: "/images/viral-gorkhe.png",
    description: "A simple villager from Gorkha battles doubts, rivalry and the harsh reality of social media in his quest to go viral.",
    trailerUrl: "https://www.youtube.com/watch?v=sDiXd22yBhY",
    tiktokUrl: "https://www.tiktok.com/@viral_gorkhey",
    instagramUrl: "https://www.instagram.com/viralgorkheyfilm/",
  },
  {
    id: 1,
    title: "Naaka",
    year: "2017",
    category: "Feature Film",
    director: "Amit Shrestha",
    thumbnail: "/images/naka-poster.jpeg",
    description: "An intense thriller that takes you through the checkpoints of life, where every decision matters and every moment counts.",
    trailerUrl: "https://www.youtube.com/watch?v=u2gbhTlEbAE",
  },
  {
    id: 3,
    title: "The Whole Timers",
    year: "",
    category: "Coming-of-Age War Film",
    director: "Pooja Gurung & Bibhusen Basnet",
    thumbnail: "/images/WT.jpg",
    description: "A groundbreaking coming-of-age war film and the first Nepali feature to receive CNC Production Aid. Featured in Cannes Cinefondation L'Atelier (2016), Locarno Open Doors Lab (2017), and Film Bazaar (2017). Winner of the HBF Script and Development Award and Cam-a-lot & Filmmore Cinema Emerging Talent Prize at The Holland Film Meeting.",
    trailerUrl: "",
  },
];
