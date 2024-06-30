import { useGetGamesQuery } from "@/features/games/gameApi";
import Game from "./Game";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { GameType } from "@/utils/types";
import GameSkeleton from "./GameSkeleton";
import { SelectPlatforms } from "./SelectPlatforms";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const GameList = () => {
  const [page, setPage] = useState(1);
  const [games, setGames] = useState<GameType[]>([]);
  const { data, isLoading, isFetching, isError, error } = useGetGamesQuery({
    page,
    pageSize: 10,
  });
  const { results } = data || {};

  useEffect(() => {
    if (data) {
      setGames((prev) => [...prev, ...results]);
    }
  }, [data]);

  const handlePagination = () => {
    setPage((prevPage) => prevPage + 1);
  };

  let content;
  if (!isError && isLoading) {
    content = (
      <>
        <GameSkeleton />
        <GameSkeleton />
        <GameSkeleton />
        <GameSkeleton />
        <GameSkeleton />
        <GameSkeleton />
      </>
    );
  } else if (isError) {
    content = <div>{(error as FetchBaseQueryError).status}</div>;
  } else if (!isError && !isLoading && games?.length === 0) {
    content = <div>No games found!</div>;
  } else if (!isError && !isLoading && games?.length > 0) {
    content = games?.map((game: GameType) => (
      <Game key={game?.id} game={game} />
    ));
  }

  console.log(isLoading);

  return (
    <div className="w-full lg:w-[75%]">
      {/* FILTER */}
      <div className="flex items-center justify-between mb-7 flex-wrap gap-5">
        <div className="flex items-center gap-3 ">
          <span>Home </span>/<span className="text-lightBlue"> Games</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-5">
          <div className="">
            <h2 className="mb-1">Sort By:</h2>
            <SelectPlatforms />
          </div>

          {/* <SelectPlatforms /> */}
        </div>
      </div>

      {/* GAME CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
        {content}
      </div>

      {!isError && !isLoading && data?.count !== games?.length && (
        <div className="flex items-center justify-evenly mt-5">
          <Button
            disabled={isFetching}
            className="disabled:bg-primary/25"
            onClick={handlePagination}
          >
            {isFetching ? "Loading..." : "Load More"}
          </Button>
        </div>
      )}

      {games?.length === data?.count && (
        <p className="text-center text-muted-foreground">
          No more games to load 😢
        </p>
      )}
    </div>
  );
};

export default GameList;
