import { StoreGameType, GameStore } from "@/utils/types";
import { Link } from "react-router-dom";

type Props = {
  store: GameStore;
};

const Store = ({ store }: Props) => {
  const { name, image_background, games, domain } = store || {};

  const formattedDomain = domain.startsWith("http")
    ? domain
    : `https://${domain}`;

  return (
    <div
      className={`w-full relative rounded-md bg-cover shadow-lg shadow-lightBlue/20 hover:shadow-lightBlue/35 overflow-hidden transition-all duration-500`}
      style={{ backgroundImage: `url(${image_background})` }}
    >
      <div className="bg-black/50 h-full p-5">
        <div className="flex flex-col items-center">
          <a
            href={formattedDomain}
            className="text-center mt-2 text-xl text-lightBlue font-medium underline"
          >
            {name}
          </a>
        </div>

        <div className="text-muted-foreground mt-5">
          <h2 className="text-white/65">Games:</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {games?.slice(0, 3).map((game: StoreGameType) => (
              <Link
                className={`bg-primary px-2 py-1 rounded-xl text-sm hover:bg-lightBlue hover:text-gray-900 transition-all duration-300`}
                key={game?.id}
                to={`/game/${game?.id}`}
              >
                {game?.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
