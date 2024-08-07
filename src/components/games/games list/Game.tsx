import { GameType } from "@/utils/types";
import { Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Platforms from "../../home/recent games/Platforms";
import ReactPlayer from "react-player";

type Props = {
  game: GameType;
};

const Game = ({ game }: Props) => {
  const {
    id,
    name,
    background_image,
    released,
    suggestions_count,
    rating,
    genres,
    parent_platforms,
    clip,
  } = game || {};

  return (
    <div className=" border-white/25 rounded-md overflow-hidden relative">
      <Link to={`/game/${id}`}>
        {clip ? (
          <ReactPlayer url={clip} />
        ) : (
          <img
            src={
              background_image === null ? "/images/1.jpeg" : background_image
            }
            className=" hover:scale-110 hover:brightness-75 transition-all duration-500"
            alt="banner"
          />
        )}
      </Link>

      <div className="mt-4 ">
        <Platforms size="size-4" parent_platforms={parent_platforms} />
      </div>
      <div className=" mt-4 mb-9">
        <div className="flex items-center justify-between mb-4">
          {/* <p className="text-muted-foreground text-sm">3 mar 2030</p> */}
          <div className="flex items-center gap-1">
            <Heart className="size-4 text-lightBlue" />
            <h3 className="text-sm">{suggestions_count}</h3>
          </div>

          <div className="flex items-center gap-1">
            <Star className="text-lightBlue size-4" />
            <h3 className="text-sm">{rating}</h3>
          </div>
        </div>

        <Link
          to="game/call of duty"
          className="hover:text-lightBlue transition-all duration-300 text-sm line-clamp-2"
        >
          {name}
        </Link>

        <p className="text-muted-foreground text-sm my-2 break-words ">
          Genre:{" "}
          {genres.map((g, i) => (
            <span key={g.id} className={`ml-1`}>
              {g.name}
              {genres?.length !== i + 1 && ","}
            </span>
          ))}
        </p>

        <p className="text-muted-foreground text-sm mb-5">
          Released: {released}
        </p>
      </div>
    </div>
  );
};

export default Game;
