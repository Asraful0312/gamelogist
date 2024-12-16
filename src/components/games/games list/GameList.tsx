import { useGetGamesQuery } from "@/features/games/gameApi";
import Game from "./Game";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { GameType } from "@/utils/types";
import GameSkeleton from "./GameSkeleton";
import { SelectPlatforms } from "./SelectPlatforms";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string"; // You may need to install this package
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHook";
import { useSearchGamesByNameQuery } from "@/features/search/searchApi";
import { useDebounce } from "@/hooks/useDebounce";
import { getSearchTerms } from "@/features/search/searchSlice";

const GameList = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { searchTerms } = useAppSelector((state) => state.search);
  const debounceValue = useDebounce(searchTerms);

  const { genre, platform, tag, developer } = queryString.parse(
    location.search
  );

  const [page, setPage] = useState(1);
  const [games, setGames] = useState<GameType[]>([]);

  // Fetch games based on search term or query parameters
  const {
    data: searchedData,
    isLoading: isSearching,
    isFetching: isSearchFetching,
    isError: isSearchError,
    error: searchError,
  } = useSearchGamesByNameQuery(debounceValue, {
    skip: !debounceValue,
  });

  const { data, isLoading, isFetching, isError, error } = useGetGamesQuery(
    { page, pageSize: 10, genre, platform, tag, developer },
    { skip: debounceValue !== "" } // Skip fetching all games if search term is present
  );

  useEffect(() => {
    dispatch(getSearchTerms(""));
  }, [location.search]);

  useEffect(() => {
    if (debounceValue) {
      setGames(searchedData?.results || []);
    } else {
      setGames(data?.results || []);
    }
  }, [data, searchedData, debounceValue]);

  const handlePagination = () => {
    setPage((prevPage) => prevPage + 1);
  };

  let content;
  if (isLoading || isSearching || isSearchFetching || isFetching) {
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
  } else if (isError || isSearchError) {
    content = (
      <div>
        {(error as FetchBaseQueryError)?.status ||
          (searchError as FetchBaseQueryError)?.status}
      </div>
    );
  } else if (games?.length === 0) {
    content = <div>No games found!</div>;
  } else {
    content = games?.map((game: GameType) => (
      <Game searchTerms={searchTerms} key={game?.id} game={game} />
    ));
  }

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
        </div>
      </div>

      {/* GAME CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
        {content}
      </div>

      {!isError &&
        !isLoading &&
        !isSearchError &&
        !isSearching &&
        data?.count !== games?.length && (
          <div className="flex items-center justify-evenly mt-5">
            <Button
              disabled={isFetching || isSearchFetching}
              className="disabled:bg-primary/25"
              onClick={handlePagination}
            >
              {isFetching || isSearchFetching ? "Loading..." : "Load More"}
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
