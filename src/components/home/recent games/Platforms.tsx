import { FaWindows, FaXbox } from "react-icons/fa6";
import { RiAndroidFill } from "react-icons/ri";
import { FaPlaystation } from "react-icons/fa6";
import { Platform } from "@/utils/types";
import { MdOutlinePhoneIphone } from "react-icons/md";

type PlatformProps = {
  parent_platforms: Platform[];
  size?: string; // Optional prop for size customization (e.g., "size-5")
};

const Platforms = ({ parent_platforms, size }: PlatformProps) => {
  const platformIcons = parent_platforms.map((p, index: number) => {
    switch (p.platform.name) {
      case "PC":
        return (
          <FaWindows
            key={index}
            className={`text-white hover:text-lightBlue transition-all duration-300 shrink-0 ${
              size ? size : "size-5"
            }`}
          />
        );
      case "PlayStation":
        return (
          <FaPlaystation
            key={index}
            className={`text-white hover:text-lightBlue transition-all duration-300 size-5 shrink-0 ${
              size ? size : "size-5"
            }`}
          />
        );
      case "Xbox":
        return (
          <FaXbox
            key={index}
            className={`text-white hover:text-lightBlue transition-all duration-300 size-5 shrink-0 ${
              size ? size : "size-5"
            }`}
          />
        );
      case "Android":
        return (
          <RiAndroidFill
            key={index}
            className={`text-white hover:text-lightBlue transition-all duration-300 size-5 shrink-0 ${
              size ? size : "size-5"
            }`}
          />
        );
      case "iOS":
        return (
          <MdOutlinePhoneIphone
            key={index}
            className={`text-white hover:text-lightBlue transition-all duration-300 size-5 shrink-0 ${
              size ? size : "size-5"
            }`}
          />
        );
      default:
        return null;
    }
  });

  return (
    <div className="mb-3">
      <div className="platform-icons flex space-x-2">{platformIcons}</div>
    </div>
  );
};

export default Platforms;
