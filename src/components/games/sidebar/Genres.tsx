import { Button } from "@/components/ui/button";
import { useGetPaginatedGenresQuery } from "@/features/genres/genreApi";
import { GenreType } from "@/utils/types";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import GenreSkeleton from "./GenreSkeleton";

const Genres = () => {
  const [page] = useState(1);
  const [isShowAll, setIsShowAll] = useState(false);
  const [pageSize, setPageSize] = useState(4);
  const { data, isLoading, isFetching, isError, error } =
    useGetPaginatedGenresQuery({
      page,
      pageSize,
    });
  const { results: genres } = data || {};

  let content;
  if (!isError && isLoading) {
    content = (
      <>
        <GenreSkeleton />
        <GenreSkeleton />
        <GenreSkeleton />
        <GenreSkeleton />
      </>
    );
  } else if (isError) {
    content = <div>{(error as FetchBaseQueryError).status}</div>;
  } else if (!isError && !isLoading && genres?.length === 0) {
    content = <div>No genres found</div>;
  } else if (!isError && !isLoading && genres?.length > 0) {
    content = genres?.map((genre: GenreType) => (
      <Link
        to={`/games/${genre.name}`}
        title="Filter By Genre"
        key={genre.id}
        className="flex items-center gap-2 cursor-pointer group"
      >
        <img
          className="size-8 rounded-md object-cover group-hover:rotate-6 transition-all duration-300"
          src={genre.image_background}
          alt="genre image"
        />
        <h3 className="text-white group-hover:text-lightBlue transition-all duration-300">
          {genre.name}
        </h3>
      </Link>
    ));
  }

  const handleShowAll = () => {
    setIsShowAll(!isShowAll);
    setPageSize(data?.count);
  };
  return (
    <div className="">
      <h2 className="font-medium">Genres</h2>

      <div
        className={`mt-6 space-y-5 overflow-hidden ${
          isShowAll ? "h-full" : "h-[180px]"
        }`}
      >
        {content}
      </div>

      {!isLoading && !isError && (
        <Button
          disabled={isFetching}
          onClick={handleShowAll}
          className="mt-4 disabled:bg-primary/50"
        >
          <span className="mr-2">
            {isFetching ? "Loading..." : isShowAll ? "Show Less" : "Show All"}
          </span>
          <ChevronDown
            className={`size-5 ${isShowAll ? "rotate-180" : "rotate-0"}`}
          />
        </Button>
      )}
    </div>
  );
};

export default Genres;
