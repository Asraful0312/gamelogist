import { buttonVariants } from "@/components/ui/button";
import { FaWindows, FaXbox } from "react-icons/fa6";
import { RiAndroidFill } from "react-icons/ri";
import { Link } from "react-router-dom";

type Props = {
  game: {
    name: string;
    author: string;
    released: string;
    imgUrl: string;
  };
};

const GameCard = ({ game }: Props) => {
  const { name, imgUrl, author, released } = game || {};
  return (
    <div className="border border-white/35 hover:border-white/45 transition-all hover:shadow-lg hover:shadow-white/30 duration-300 rounded-lg p-1 group overflow-hidden">
      <img
        className="w-full rounded-lg object-cover group-hover:scale-110 transition-all duration-300"
        src={imgUrl}
        alt="banner"
      />
      <div className="mt-5 px-4">
        <div className="flex items-center gap-3 mb-5">
          <FaWindows className="text-white hover:text-blue-200 transition-all duration-300 size-5 shrink-0" />
          <FaXbox className="text-white hover:text-blue-200 transition-all duration-300 size-5 shrink-0" />
          <RiAndroidFill className="text-white hover:text-blue-200 transition-all duration-300 size-5 shrink-0" />
        </div>
        <h2 className="text-white mb-3 line-clamp-2">{name}</h2>

        <p className="text-muted-foreground text-sm mb-2">
          Developed By: {author}
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
