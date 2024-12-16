import { GameDetailsType } from "@/utils/types";
import Platforms from "../home/recent games/Platforms";
import { Button } from "../ui/button";
import { FaHeartCircleCheck } from "react-icons/fa6";
import About from "./About";
import { useState } from "react";
import GenerateTextWithCommas from "@/utils/generateTextWithCommas";

type Props = {
  data: GameDetailsType;
};

function GameInfo({ data }: Props) {
  const [isShowReq, setIsShowReq] = useState(false);
  const {
    name,
    parent_platforms,
    released,
    playtime,
    ratings,
    rating,
    website,
    platforms,
    tags,
  } = data || {};

  const requirementsText = (text = "") => {
    let str;
    str = text.length >= 200 && isShowReq ? text : text.substring(0, 200);

    return str;
  };

  return (
    <div className="w-full lg:w-[65%] ">
      <Platforms parent_platforms={parent_platforms} />
      <div className="flex items-center flex-wrap gap-6">
        <p className="text-gray-900 bg-lightBlue p-2 inline rounded text-sm">
          Released: {released}
        </p>

        <p className="text-sm text-gray-300 font-normal">
          Average Playtime: <span className="text-lightBlue">{playtime}</span>{" "}
          Hours
        </p>
      </div>
      <h2 className="text-4xl mt-4">{name}</h2>

      <Button className="mt-5 flex items-center gap-2" variant="secondary">
        <span>Add To WishList</span> <FaHeartCircleCheck className="size-5" />
      </Button>

      {/* RATINGS */}
      <div className="mt-8">
        <h2 className="text-lg font-medium text-lightBlue">
          Ratings: <span className="text-white">{rating}</span>
        </h2>
        {ratings?.map((r) => (
          <div key={r.id} className="flex items-center gap-2 mt-3">
            {r.title === "exceptional"
              ? "✔️"
              : r.title === "recommended"
              ? "👍"
              : r.title === "meh"
              ? "😐"
              : r.title === "skip"
              ? "❌"
              : ""}
            <p className="capitalize">
              {r.title} <span className="text-lightBlue">({r.count})</span>
            </p>
            {r.percent}%
          </div>
        ))}
      </div>

      {/* ABOUT */}
      <About data={data} />

      {/* WEBSITE */}
      <div className="mt-12">
        <h2 className="text-lg font-medium text-white">Website</h2>
        <a
          className="text-muted-foreground underline"
          href={website}
          target="_blank"
          rel="noopener noreferrer"
        >
          {website}
        </a>
      </div>

      {/* requirements */}
      <div className="mt-12  ">
        <h2 className="text-lg font-medium mb-3">Requirements</h2>
        {platforms?.map((platform) => (
          <div key={platform.platform.id}>
            <h2 className="text-base mb-2 text-lightBlue mt-3">
              {platform.platform.name} Requirements
            </h2>
            <p className="text-muted-foreground break-words">
              {requirementsText(platform?.requirements?.minimum)}{" "}
              {platform?.requirements?.minimum && (
                <span
                  onClick={() => setIsShowReq((prev) => !prev)}
                  className="underline cursor-pointer"
                >
                  {isShowReq ? "Show less" : "Show more..."}
                </span>
              )}
            </p>
          </div>
        ))}
      </div>

      {/* TAGS */}
      <div className="mt-12">
        <h2 className="text-lg font-medium text-white">Tags</h2>
        <GenerateTextWithCommas arr={tags} to="/games?tags=" />
      </div>
    </div>
  );
}

export default GameInfo;
