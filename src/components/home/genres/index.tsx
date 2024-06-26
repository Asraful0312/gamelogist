import { GenreType } from "@/utils/types";
import Title from "../../shared/Title";
import Wrapper from "../../shared/Wrapper";

import Genre from "./Genre";
import { useGetGenresQuery } from "@/features/genres/genreApi";
import GenreSkeleton from "./GenreSkeleton";
import Slider from "./Slider";
const Genres = () => {
  const { data, isLoading, isError, error } = useGetGenresQuery();
  const { results: genres } = data || {};

  let content;

  if (!isError && isLoading) {
    content = (
      <>
        <GenreSkeleton />
        <GenreSkeleton />
        <GenreSkeleton />
        <GenreSkeleton />
        <GenreSkeleton />
        <GenreSkeleton />
        <GenreSkeleton />
        <GenreSkeleton />
      </>
    );
  } else if (isError) {
    content = <div className="text-white">{error.status}</div>;
  } else if (!isError && !isLoading && genres?.length === 0) {
    content = <div>No genres found</div>;
  } else if (!isError && !isLoading && genres?.length > 0) {
    content = genres.map((genre: GenreType) => (
      <Genre key={genre?.id} genre={genre} />
    ));
  }

  return (
    <section className="mb-[160px] ">
      <Wrapper>
        <Title>
          Discover by <span className="text-blue-200">Genre</span>
        </Title>

        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-8 gap-5 relative isolate">
          {content}

          <div className="absolute size-[300px] blur-[100px] bg-blue-300 top-[24%] left-1/3 transform -translate-x-1/2 -translate-y-1/2 -z-10 opacity-65"></div>
        </div>

        <Slider />
      </Wrapper>
    </section>
  );
};

export default Genres;
