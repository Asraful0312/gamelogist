import { useGetTrailerQuery } from "@/features/games/gameApi";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { Skeleton } from "../ui/skeleton";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

const Trailer = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useGetTrailerQuery(id);
  const { results } = data || {};

  let content;
  if (!isError && isLoading) {
    content = (
      <>
        <Skeleton className="w-full h-[200px]" />
      </>
    );
  } else if (isError && !isLoading) {
    content = <div>{(error as FetchBaseQueryError).status}</div>;
  } else if (!isError && !isLoading && results?.length === 0) {
    content = <div>No trailer found</div>;
  } else if (!isError && !isLoading && results?.length > 0) {
    content = (
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        muted
        playing
        url={results[0]?.data?.["480"]}
      />
    );
  }
  return <div className="w-full">{content}</div>;
};

export default Trailer;
