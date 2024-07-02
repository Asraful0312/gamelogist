import Genres from "@/components/home/genres";
import Hero from "@/components/home/hero/Hero";
import RecentGames from "@/components/home/recent games";
import StoreList from "@/components/home/stores/StoreList";

const Home = () => {
  return (
    <div>
      <Hero />
      <RecentGames />
      <Genres />
      <StoreList />
    </div>
  );
};

export default Home;
