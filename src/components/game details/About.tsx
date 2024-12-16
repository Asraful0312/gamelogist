import GenerateTextWithCommas from "@/utils/generateTextWithCommas";
import { GameDetailsType } from "@/utils/types";
import { useState } from "react";
import { Link } from "react-router-dom";
type Props = {
  data: GameDetailsType;
};

const About = ({ data }: Props) => {
  const [showMore, setShowMore] = useState(false);

  const {
    parent_platforms,
    released,
    description_raw,
    genres,
    developers,
    esrb_rating,
    metacritic,
    publishers,
  } = data || {};

  return (
    <>
      {/* ABOUT */}
      <div className="mt-10">
        <h2 className="text-lg font-medium mb-2">About</h2>
        <p>
          {showMore ? description_raw : description_raw.substring(0, 400)}{" "}
          {description_raw.length >= 400 && (
            <span
              onClick={() => setShowMore((prev) => !prev)}
              className="ml-1 text-gray-300 underline cursor-pointer hover:text-lightBlue"
            >
              {showMore ? "Show Less" : "Show More..."}
            </span>
          )}
        </p>
      </div>

      {/* OTHER INFOS */}
      <div className="flex flex-wrap gap-14 mt-12">
        <div>
          {/* platforms */}
          <div>
            <h2 className="text-lg mb-2 text-lightBlue">Platforms</h2>
            <p className="break-words text-muted-foreground ">
              {parent_platforms?.map((p, i) => (
                <Link
                  key={p.platform.id}
                  className="underline"
                  to={`/games/${p.platform.slug}`}
                >
                  {" "}
                  {p.platform.name}
                  {parent_platforms.length !== i + 1 && ","}
                </Link>
              ))}
            </p>
          </div>

          {/* genres */}
          <div className="mt-6">
            <h2 className="text-lg mb-2 text-lightBlue">Genres</h2>
            <GenerateTextWithCommas arr={genres} />
          </div>

          {/* developers */}
          <div className="mt-6">
            <h2 className="text-lg mb-2 text-lightBlue">Developer</h2>
            <GenerateTextWithCommas to="/games?developer=" arr={developers} />
          </div>

          {/* age ratings */}
          <div className="mt-6">
            <h2 className="text-lg mb-2 text-lightBlue">Age Rating</h2>
            <p className="text-muted-foreground break-words ">
              {esrb_rating?.name ? esrb_rating?.name : "No Age Rating Found!"}
            </p>
          </div>
        </div>

        <div>
          {/* meta score */}
          <div className="">
            <h2 className="text-lg mb-3 text-lightBlue">Meta Score</h2>
            <p className="text-muted-foreground border border-white/25 inline p-2 rounded-md">
              {metacritic ? metacritic : "No meta score found!"}
            </p>
          </div>

          {/* released date */}
          <div className="mt-6">
            <h2 className="text-lg mb-2 text-lightBlue">Released Date</h2>
            <p className="text-muted-foreground">{released}</p>
          </div>

          {/* publisher */}
          <div className="mt-6">
            <h2 className="text-lg mb-2 text-lightBlue">Publisher</h2>
            <GenerateTextWithCommas arr={publishers} to="/games?publisher=" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
