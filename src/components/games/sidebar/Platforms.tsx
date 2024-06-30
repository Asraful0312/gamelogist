import { FaPlaystation, FaWindows, FaXbox } from "react-icons/fa6";
import { RiAndroidFill } from "react-icons/ri";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { Link } from "react-router-dom";

const PLATFORMS = [
  {
    name: "PC",
    icon: (
      <FaWindows className="text-lightBlue transition-all duration-300 size-5 shrink-0" />
    ),
  },
  {
    name: "Xbox",
    icon: (
      <FaXbox className="text-lightBlue transition-all duration-300 size-5 shrink-0" />
    ),
  },
  {
    name: "Playstation",
    icon: (
      <FaPlaystation className="text-lightBlue transition-all duration-300 size-5 shrink-0" />
    ),
  },
  {
    name: "Android",
    icon: (
      <RiAndroidFill className="text-lightBlue transition-all duration-300 size-5 shrink-0" />
    ),
  },
  {
    name: "iOS",
    icon: (
      <MdOutlinePhoneIphone className="text-lightBlue transition-all duration-300 size-5 shrink-0" />
    ),
  },
];

const Platforms = () => {
  return (
    <div>
      <h2 className="font-medium mb-6">Platforms</h2>

      <div className="space-y-4">
        {PLATFORMS.map((platform) => (
          <Link
            to={`/games?platform=${platform.name}`}
            title="Filter By Platform"
            key={platform.name}
            className="flex items-center gap-2 cursor-pointer group"
          >
            {platform.icon}
            <h2 className="group-hover:text-lightBlue transition-all duration-300">
              {platform.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Platforms;
