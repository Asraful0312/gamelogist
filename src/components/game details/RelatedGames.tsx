import { useGetRelatedGamesQuery } from "@/features/games/gameApi";
import { GameType, TagsType } from "@/utils/types";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import Game from "../games/games list/Game";
import { useParams } from "react-router-dom";
import GameCardSkeleton from "../home/recent games/GameCardSkeleton";

type Props = {
  tags: TagsType[];
};

function RelatedGames({ tags }: Props) {
  const { id } = useParams();
  const tag =
    tags &&
    tags
      ?.slice(0, 4)
      ?.map((t) => t?.slug)
      .join(",");

  const skipQuery = !tag; // Skip the query if no tags are available
  const { data, isError, error, isLoading } = useGetRelatedGamesQuery(tag, {
    skip: skipQuery,
  });
  const { results } = data || {};

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
  } else if (!isLoading && isError) {
    content = <div>{(error as FetchBaseQueryError).status}</div>;
  } else if (!isError && !isLoading && results?.length === 0) {
    content = <div>No stores found</div>;
  } else if (!isError && !isLoading && results?.length > 0) {
    const updatedGame = results.filter(
      (item: { id: number }) => item.id !== Number(id)
    );
    content = updatedGame.map((game: GameType) => <Game game={game} />);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-10">
      {content}
    </div>
  );
}

export default RelatedGames;
