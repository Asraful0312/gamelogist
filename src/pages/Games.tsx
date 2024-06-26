import SideBar from "@/components/games/SideBar";
import Wrapper from "./../components/shared/Wrapper";
import GameList from "@/components/games/GameList";

const Games = () => {
  return (
    <section className="">
      <Wrapper className="flex flex-col md:flex-row gap-20">
        <SideBar />
        <GameList />
      </Wrapper>
    </section>
  );
};

export default Games;
