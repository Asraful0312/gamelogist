import { GenreType } from "@/utils/types";
import Title from "../../shared/Title";
import Wrapper from "../../shared/Wrapper";

import Genre from "./Genre";
import { useGetGenresQuery } from "@/features/genres/genreApi";
import GenreSkeleton from "./GenreSkeleton";
import {
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  Carousel,
  CarouselItem,
} from "@/components/ui/carousel";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
const Genres = () => {
  const { data, isLoading, isError, error } = useGetGenresQuery(undefined);
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
    content = <div>{(error as FetchBaseQueryError).status}</div>;
  } else if (!isError && !isLoading && genres?.length === 0) {
    content = <div>No genres found</div>;
  } else if (!isError && !isLoading && genres?.length > 0) {
    content = genres?.map((genre: GenreType) => (
      <CarouselItem key={genre?.id} className="md:basis-1/2 lg:basis-[12%]">
        <Genre key={genre?.id} genre={genre} />
      </CarouselItem>
    ));
  }

  return (
    <section className="mb-[160px] ">
      <Wrapper>
        <Title>
          Discover by <span className="text-blue-200">Genre</span>
        </Title>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="gap-5">{content}</CarouselContent>
          <CarouselPrevious className="border-none hover:bg-blue-200 text-black transition-all duration-300" />
          <CarouselNext className="border-none hover:bg-blue-200 text-black transition-all duration-300" />
        </Carousel>
      </Wrapper>
    </section>
  );
};

export default Genres;
