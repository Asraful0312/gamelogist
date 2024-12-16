import { GameDetailsType, ScreenShortsType } from "@/utils/types";
import { Skeleton } from "../ui/skeleton";
import Trailer from "./Trailer";
import GameStores from "./GameStores";

type Props = {
  gameData: GameDetailsType;
  data: {
    count: number;
    results: ScreenShortsType[];
  };
  setCurrentIndex: (index: number) => void;
  setViewImage: (view: boolean) => void;
  setShowAllImage: (view: boolean) => void;
  showAllImage: boolean;
  isFetching: boolean;
};

const GameSideBar = ({
  gameData,
  data,
  setCurrentIndex,
  setViewImage,
  isFetching,
  showAllImage,
  setShowAllImage,
}: Props) => {
  const { results } = data || {};

  const handleViewImage = (idx: number) => {
    setViewImage(true);
    setCurrentIndex(idx);
  };

  const updatedResults = results?.slice(0, 3);

  return (
    <div className="w-full z-0 h-full lg:w-[35%]">
      {/* TRAILER */}
      <div className="">
        <h2 className="text-lg font-medium text-lightBlue mb-5">Trailer</h2>
        <Trailer />
      </div>

      {/* SCREENSHOTS */}
      <div className="my-10">
        <h2 className="text-lg font-medium text-lightBlue mb-5">Screenshots</h2>
        <div className="grid grid-cols-2 gap-4 ">
          {updatedResults?.map((result: ScreenShortsType, index: number) => (
            <div
              key={result?.id}
              onClick={() => handleViewImage(index)}
              className="cursor-pointer"
            >
              <img className="rounded-lg" src={result.image} alt="" />
            </div>
          ))}
          {!showAllImage && (
            <div
              onClick={() => setShowAllImage(true)}
              className="relative rounded-lg overflow-hidden cursor-pointer"
            >
              <img className="" src={results[2]?.image} alt="" />
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                <span className="underline text-muted-foreground cursor-pointer">
                  View all
                </span>
              </div>
            </div>
          )}
          {isFetching && <Skeleton className="w-full h-24" />}
        </div>
      </div>

      <div className="">
        <h2 className="text-lg font-medium text-lightBlue mb-5">
          Where to Buy
        </h2>
        <GameStores data={gameData} />
      </div>
    </div>
  );
};

export default GameSideBar;
