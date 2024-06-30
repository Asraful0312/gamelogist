import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link className="text-white font-bold  rotate-2" to="/">
      <div className="inline-flex flex-col text-sm md:text-xl">
        GAMELOGIST
        <div className="h-[2px] bg-lightBlue rounded-full w-full"></div>
        <div className="h-[2px] bg-white rounded-full w-full ml-2 mt-[1px]"></div>
      </div>
    </Link>
  );
};

export default Logo;
