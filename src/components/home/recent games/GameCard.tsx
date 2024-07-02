import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Platforms from "./Platforms";
import { GameType } from "@/utils/types";

type Props = {
  game: GameType;
};

const GameCard = ({ game }: Props) => {
  const { id, name, background_image, parent_platforms, released, genres } =
    game || {};

  return (
    <div className="border border-white/35 hover:border-white/45 transition-all hover:shadow-lg hover:shadow-white/30 duration-300 rounded-lg p-1 group overflow-hidden">
      <Link to={`/game/${id}`}>
        <img
          className="w-full rounded-lg object-cover group-hover:scale-110 transition-all duration-300 h-[150px]"
          src={background_image === null ? "/images/1.jpeg" : background_image}
          alt="banner"
        />
      </Link>
      <div className="mt-5 px-4">
        <Platforms parent_platforms={parent_platforms} />
        <Link to={`/game/${id}`} className="text-white mb-3 line-clamp-2">
          {name}
        </Link>

        <p className="text-muted-foreground text-sm mb-2">
          Genre: {genres[0]?.name}
        </p>

        <p className="text-muted-foreground text-sm mb-5">
          Released: {released}
        </p>

        <div className="flex justify-start mb-7">
          <Link className={buttonVariants()} to="/">
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
