import { ScreenShortsType } from "@/utils/types";
import Wrapper from "../shared/Wrapper";
import { ChevronLeft } from "lucide-react";

type Props = {

  id?: string;
  data: {
    results: ScreenShortsType[];
  };
  setViewImage: (view: boolean) => void;
  setCurrentIndex: (index: number) => void;
  setShowAllImage: (showAll: boolean) => void;
};

function AllScreenShorts({

  setViewImage,
  setCurrentIndex,
  setShowAllImage,
  data,
}: Props) {
  const handleViewImage = (idx: number) => {
    setViewImage(true);
    setCurrentIndex(idx);
  };

  return (
    <Wrapper className="mb-36">
      <div
        onClick={() => setShowAllImage(false)}
        className="flex items-center gap-1 mb-4 cursor-pointer"
      >
        <ChevronLeft className="size-8 text-white shrink-0" />
        <h2 className="text-lg">Back</h2>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {data?.results?.map((screenShort: ScreenShortsType, index: number) => (
          <img
            onClick={() => handleViewImage(index)}
            key={screenShort?.id}
            src={screenShort?.image}
            alt={screenShort?.image}
          />
        ))}
      </div>
    </Wrapper>
  );
}

export default AllScreenShorts;
