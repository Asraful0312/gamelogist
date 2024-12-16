import AllScreenShorts from "@/components/game details/AllScreenShorts";
import GameDetailsSkeleton from "@/components/game details/GameDetailsSkeleton";
import GameInfo from "@/components/game details/GameInfo";
import GameSideBar from "@/components/game details/GameSideBar";
import RelatedGames from "@/components/game details/RelatedGames";
import Wrapper from "@/components/shared/Wrapper";
import { Skeleton } from "@/components/ui/skeleton";
import {
  useGetGameQuery,
  useGetGameScreenShotsQuery,
} from "@/features/games/gameApi";
import { ScreenShortsType } from "@/utils/types";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { MdCancel } from "react-icons/md";
import { useParams } from "react-router-dom";

const GameDetails = () => {
  const { id } = useParams();
  const [viewImage, setViewImage] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAllImage, setShowAllImage] = useState(false);
  const {
    data: screenShortsData,
    isLoading,
    isError,
    isFetching,
    error,
  } = useGetGameScreenShotsQuery({
    id,
    page: 1,
    pageSize: 9,
  });

  const {
    data,
    isLoading: screenShortLoading,
    isError: screenShortIsError,
    error: screenShortError,
  } = useGetGameQuery(Number(id));

  let status;
  if (isLoading) {
    status = <GameDetailsSkeleton />;
  } else if (isError) {
    status = <div>{(error as FetchBaseQueryError).status}</div>;
  } else if (!data?.id) {
    status = <div>Game not found</div>;
  }

  let content;
  if (!screenShortIsError && screenShortLoading) {
    content = (
      <>
        <Skeleton className="w-full h-24" />
        <Skeleton className="w-full h-24" />
        <Skeleton className="w-full h-24" />
      </>
    );
  } else if (screenShortIsError && !screenShortLoading) {
    content = <div>{(screenShortError as FetchBaseQueryError).status}</div>;
  } else if (
    !screenShortIsError &&
    !screenShortLoading &&
    screenShortsData?.results?.length === 0
  ) {
    content = <div>Game not found</div>;
  } else if (
    !screenShortIsError &&
    !screenShortLoading &&
    screenShortsData?.results?.length > 0
  ) {
    content = (
      <GameSideBar
        gameData={data}
        data={screenShortsData}
        setCurrentIndex={setCurrentIndex}
        setViewImage={setViewImage}
        isFetching={isFetching}
        showAllImage={showAllImage}
        setShowAllImage={setShowAllImage}
      />
    );
  }

  return (
    <section>
      {showAllImage ? (
        <AllScreenShorts
          data={screenShortsData && screenShortsData}
          setCurrentIndex={setCurrentIndex}
          setViewImage={setViewImage}
          setShowAllImage={setShowAllImage}
          id={id}
        />
      ) : (
        <div
          className={`w-full min-h-screen relative game-fade -mt-36 mb-24 flex before:absolute before:inset-0 before:bg-black/45 game-details z-10`}
          style={{
            backgroundImage: `url('${data?.background_image_additional}')`,
          }}
        >
          <Wrapper className="mt-36 z-30 flex flex-col lg:flex-row gap-20">
            {status}
            {!isLoading && !isError && data?.id && <GameInfo data={data} />}
            {content}
          </Wrapper>
        </div>
      )}

      {!showAllImage && (
        <Wrapper className="z-30 mb-36">
          <h2 className="text-white text-center text-2xl">
            Games like{" "}
            {!isLoading && !isError && data && (
              <span className="text-lightBlue">{data?.name}</span>
            )}
          </h2>

          <RelatedGames tags={data && !isLoading && !isError && data?.tags} />
        </Wrapper>
      )}

      {/* modal */}
      <div
        className={`fixed min-h-screen inset-0 bg-black  overflow-y-scroll transition-all duration-300  ${
          viewImage ? "opacity-100 visible z-[60]" : "opacity-0 invisible z-10"
        }`}
      >
        <div className=" w-full max-w-6xl mx-auto px-5">
          <div className="mt-5 w-full max-w-2xl mx-auto">
            <div
              onClick={() => setViewImage(false)}
              className="flex justify-end mt-10 cursor-pointer"
            >
              <MdCancel className="text-white size-8 shrink-0 z-50" />
            </div>
            <div className="flex items-center justify-center gap-5 mb-6">
              <ChevronLeft
                onClick={() => {
                  if (currentIndex === 0) {
                    setCurrentIndex(screenShortsData?.results?.length - 1);
                  } else {
                    setCurrentIndex((prev) => prev - 1);
                  }
                }}
                className="size-10 text-white shrink-0 bg-primary rounded cursor-pointer hover:bg-white hover:text-gray-900 transition-all duration-300"
              />
              <ChevronRight
                onClick={() => {
                  if (currentIndex === screenShortsData?.results?.length - 1) {
                    setCurrentIndex(0);
                  } else {
                    setCurrentIndex((prev) => prev + 1);
                  }
                }}
                className="size-10 text-white shrink-0 bg-primary rounded cursor-pointer hover:bg-white hover:text-gray-900 transition-all duration-300"
              />
            </div>
            <img
              className={`w-full rounded bg-cover transition-all duration-300 select-none`}
              src={
                screenShortsData &&
                screenShortsData?.results[currentIndex]?.image
              }
              alt=""
            />
          </div>

          <div className="w-full flex items-center justify-center gap-4 my-5 overflow-x-scroll hide-scrollbar ">
            {screenShortsData?.results &&
              screenShortsData?.results?.map(
                (result: ScreenShortsType, index: number) => (
                  <img
                    key={result.id}
                    onClick={() => setCurrentIndex(index)}
                    onMouseEnter={() => setCurrentIndex(index)}
                    className={`w-24 h-14 object-cover rounded select-none ${
                      currentIndex === index
                        ? "brightness-100 "
                        : "brightness-50 "
                    }`}
                    src={result.image}
                    alt=""
                  />
                )
              )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameDetails;
