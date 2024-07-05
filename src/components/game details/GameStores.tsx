import { useGetStoresQuery } from "@/features/games/gameApi";
import { GameDetailsType, StoresTypes } from "@/utils/types";
import { useParams } from "react-router-dom";
import { Skeleton } from "../ui/skeleton";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

type Store = {
  game_id: number;
  id: number;
  store_id: number;
  url: string;
};

type Props = {
  data: GameDetailsType;
};

const GameStores = ({ data }: Props) => {
  const { id } = useParams();
  const { data: storeData, isLoading, isError, error } = useGetStoresQuery(id);
  const { results: stores } = storeData || {};
  console.log(stores);
  console.log(data?.stores);

  let content;
  if (!isError && isLoading) {
    content = (
      <>
        <Skeleton className="h-10 w-44" />
        <Skeleton className="h-10 w-36" />
        <Skeleton className="h-10 w-48" />
        <Skeleton className="h-10 w-32" />
      </>
    );
  } else if (!isLoading && isError) {
    content = <div>{(error as FetchBaseQueryError).status}</div>;
  } else if (!isError && !isLoading && stores?.length === 0) {
    content = <div>No stores found</div>;
  } else if (!isError && !isLoading && stores?.length > 0) {
    content = stores?.map((s: Store) => {
      const { store: newStore } = data?.stores?.find(
        (item: StoresTypes) => item.id === s.id
      ) || { store: { name: "" } };

      return (
        <a
          href={s?.url}
          className="bg-primary text-white py-2 px-4 rounded hover:bg-white hover:text-gray-900 transition-all duration-300"
          target="_blank"
        >
          {newStore.name}
        </a>
      );
    });
  }

  return <div className="flex flex-wrap gap-3">{content}</div>;
};

export default GameStores;
