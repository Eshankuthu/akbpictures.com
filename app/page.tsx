import Navigation from "@/components/Navigation";
import MovieCarousel from "@/components/MovieCarousel";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { movies } from "@/data/movies";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div id="home">
        <MovieCarousel movies={movies} />
      </div>
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
