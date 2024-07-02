import { GameDetailsType } from "@/utils/types";
import Platforms from "../home/recent games/Platforms";

import { Button } from "../ui/button";

import { FaHeartCircleCheck } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";

type Props = {
  data: GameDetailsType;
};

function GameInfo({ data }: Props) {
  const [showMore, setShowMore] = useState(false);

  const {
    name,
    parent_platforms,
    released,
    playtime,
    ratings,
    rating,
    description_raw,
    genres,
  } = data || {};

  return (
    <div className="w-full lg:w-[65%] ">
      <Platforms parent_platforms={parent_platforms} />
      <div className="flex items-center gap-6">
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
      <div className="mt-10">
        <h2 className="text-lg font-medium mb-2">About</h2>
        <p>
          {showMore ? description_raw : description_raw.substring(0, 400)}{" "}
          <span
            onClick={() => setShowMore((prev) => !prev)}
            className="ml-1 text-gray-300 underline cursor-pointer hover:text-lightBlue"
          >
            {showMore ? "Show Less" : "Show More..."}
          </span>
        </p>
      </div>

      {/* OTHER INFOS */}
      <div className="flex gap-7 mt-12">
        <div>
          {/* platforms */}
          <div>
            <h2 className="text-lg mb-2 text-lightBlue">Platforms</h2>
            <p className="break-words text-muted-foreground ">
              {parent_platforms.map((p, i) => (
                <Link className="underline" to={`/games/${p.platform.slug}`}>
                  {" "}
                  {p.platform.name}
                  {parent_platforms.length !== i + 1 && ","}
                </Link>
              ))}
            </p>
          </div>

          {/* genres */}
          <div className="mt-6">
            <h2 className="text-lg mb-2 text-lightBlue">Platforms</h2>
            <p className="text-muted-foreground break-words ">
              {genres.map((g, i) => (
                <span key={g.id}>
                  <Link to={`/games/${g.slug}`} className="underline">
                    {g.name}
                  </Link>
                  {genres.length !== i + 1 && ", "}
                </span>
              ))}
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default GameInfo;
