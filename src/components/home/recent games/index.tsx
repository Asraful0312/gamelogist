import Title from "@/components/shared/Title";
import Wrapper from "../../shared/Wrapper";
import GameCard from "./GameCard";
import { useGetLatestGamesQuery } from "@/features/games/gameApi";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameType } from "@/utils/types";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const RecentGames = () => {
  const { data, isLoading, isError, error } = useGetLatestGamesQuery({
    page: 1,
    pageSize: 4,
  });
  const { results: games } = data || {};

  let content;
  if (!isError && isLoading) {
    content = (
      <>
        <GameCardSkeleton />
        <GameCardSkeleton />
        <GameCardSkeleton />
        <GameCardSkeleton />
      </>
    );
  } else if (isError) {
    content = <div>{(error as FetchBaseQueryError).status}</div>;
  } else if (!isError && !isLoading && games?.length === 0) {
    content = <div>No genres found</div>;
  } else if (!isError && !isLoading && games?.length > 0) {
    content = games?.map((game: GameType) => (
      <GameCard key={game?.id} game={game} />
    ));
  }

  return (
    <section className="my-36">
      <Wrapper>
        <div className="flex items-center justify-between">
          <Title className="mb-0">
            Browse Recent <span className="text-lightBlue">Games</span>
          </Title>
          <Link to="/games?recent=recent_games" className="flex group">
            <span className="group-hover:-translate-x-2 transition-all duration-300 underline">
              View All
            </span>
            <ArrowRightIcon className="h-5 w-5 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {/* CARD */}
          {content}
        </div>
      </Wrapper>
    </section>
  );
};

export default RecentGames;
