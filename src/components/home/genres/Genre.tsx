
import { Link } from "react-router-dom";

type Props = {
  genre: {
    image_background: string;
    slug: string;
    name: string;
  };
};

const Genre = ({ genre }: Props) => {
  const { image_background, name, slug } = genre || {};

  return (
    <Link
      to={`/games?genre=${slug}`}
      className="border backdrop-blur-xl bg-black/30 border-white/25 flex items-center flex-col py-6 rounded-md hover:border-lightBlue hover:shadow-xl hover:shadow-white/35 transition-all duration-300 group"
    >
      <img
        className="size-20 object-cover rounded-md group-hover:-translate-y-2 transition-all duration-300"
        src={image_background}
        alt="category image"
      />
      <h3 className="mt-2 group-hover:text-lightBlue transition-all duration-300 text-center">
        {name}
      </h3>
    </Link>
  );
};

export default Genre;
