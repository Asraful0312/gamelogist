import { ScreenShortsType } from "@/utils/types";
import { useState } from "react";
import { Skeleton } from "../ui/skeleton";

type Props = {
  data: {
    count: number;
    results: ScreenShortsType[];
  };
  setCurrentIndex: (index: number) => void;
  setViewImage: (view: boolean) => void;
  setScreenShortSize: (size: number) => void;
  isFetching: boolean;
};

const GameSideBar = ({
  data,
  setCurrentIndex,
  setViewImage,
  setScreenShortSize,
  isFetching,
}: Props) => {
  const [showAllImage, setShowAllImage] = useState(false);
  const [isAllImageHave, setIsAllImageHave] = useState(false);
  const { results } = data || {};

  const handleViewImage = (idx: number) => {
    setViewImage(true);
    setCurrentIndex(idx);
  };

  const handleShowAll = () => {
    setShowAllImage(true);
    setScreenShortSize(data?.count);
    setIsAllImageHave(true);
  };

  const handleHide = () => {
    setShowAllImage(false);
    setIsAllImageHave(false);
  };

  const newData = [...results];
  const updatedSs = showAllImage ? results : newData?.slice(0, 3);

  return (
    <div className="w-full z-0 h-full lg:w-[35%]">
      <div>
        <h2 className="text-lg font-medium text-lightBlue mb-5">Screenshots</h2>
        <div className="grid grid-cols-2 gap-4 ">
          {updatedSs.map((result: ScreenShortsType, index: number) => (
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
              onClick={handleShowAll}
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

        {!isFetching && isAllImageHave && (
          <div
            onClick={handleHide}
            className="mt-4 text-center cursor-pointer underline text-lightBlue"
          >
            Show less
          </div>
        )}
      </div>
    </div>
  );
};

export default GameSideBar;
