import Genres from "@/components/home/genres";
import Hero from "@/components/home/hero/Hero";
import RecentGames from "@/components/home/recent games/RecentGames";

const Home = () => {
  return (
    <div>
      <Hero />
      <RecentGames />
      <Genres />
    </div>
  );
};

export default Home;
