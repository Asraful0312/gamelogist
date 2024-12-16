import { Link } from "react-router-dom";
import { useGetPlatformsQuery } from "@/features/filters/filterApi";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { PlatformsType } from "@/utils/types";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

// const PLATFORMS = [
//   {
//     name: "PC",
//     slug: "pc",
//     icon: (
//       <FaWindows className="text-lightBlue transition-all duration-300 size-5 shrink-0" />
//     ),
//   },
//   {
//     name: "Xbox",
//     slug: "xbox",
//     icon: (
//       <FaXbox className="text-lightBlue transition-all duration-300 size-5 shrink-0" />
//     ),
//   },
//   {
//     name: "Playstation",
//     slug: "playstation",
//     icon: (
//       <FaPlaystation className="text-lightBlue transition-all duration-300 size-5 shrink-0" />
//     ),
//   },
//   {
//     name: "Android",
//     slug: "android",
//     icon: (
//       <RiAndroidFill className="text-lightBlue transition-all duration-300 size-5 shrink-0" />
//     ),
//   },
//   {
//     name: "iOS",
//     slug: "ios",
//     icon: (
//       <MdOutlinePhoneIphone className="text-lightBlue transition-all duration-300 size-5 shrink-0" />
//     ),
//   },
// ];

const Platforms = () => {
  const [isShowAll, setIsShowAll] = useState(false);
  const [pageSize, setPageSize] = useState(6);
  const { data, isLoading, isError, isFetching, error } = useGetPlatformsQuery({
    page: 1,
    pageSize,
  });

  const { results } = data || {};

  console.log(data);
  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (!isLoading && isError) {
    content = <div>{(error as FetchBaseQueryError).status}</div>;
  } else if (!isError && !isLoading && data?.results.length === 0) {
    content = <div>No platforms found.</div>;
  } else if (!isError && !isLoading && data?.results.length > 0) {
    content = results.map((platform: PlatformsType) => (
      <Link
        to={`/games?platform=${platform.id}`}
        title="Filter By Platform"
        key={platform.name}
        className="flex items-center gap-2 cursor-pointer group"
      >
        <img
          className="size-8 object-cover rounded"
          src={platform.image_background}
          alt=""
        />
        <h2 className="group-hover:text-lightBlue transition-all duration-300">
          {platform.name}
        </h2>
      </Link>
    ));
  }

  const handleShowAll = () => {
    setIsShowAll(!isShowAll);
    setPageSize(data?.count);
  };

  return (
    <div>
      <h2 className="font-medium mb-6">Platforms</h2>

      <div
        className={`mt-6 space-y-5 overflow-hidden ${
          isShowAll ? "h-full" : "h-[240px]"
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

export default Platforms;
