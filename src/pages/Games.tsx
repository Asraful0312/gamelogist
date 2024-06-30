import SideBar from "@/components/games/sidebar/SideBar";
import Wrapper from "./../components/shared/Wrapper";
import GameList from "@/components/games/games list/GameList";

const Games = () => {
  return (
    <section className="mb-[120px]">
      <Wrapper className="flex flex-col lg:flex-row gap-14">
        <SideBar />
        <GameList />
      </Wrapper>
    </section>
  );
};

export default Games;
