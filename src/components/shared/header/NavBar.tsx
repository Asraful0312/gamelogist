/* eslint-disable react-refresh/only-export-components */
import { cn } from "@/lib/utils";
import { Library, LogOut, User2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { buttonVariants } from "../../ui/button";

export const NAV_LINKS = [
  {
    label: "Home",
    to: "/",
    isReleased: true,
  },
  {
    label: "Games",
    to: "/games",
    isReleased: true,
  },
  {
    label: "Community",
    to: "/",
    isReleased: false,
  },
];

const NavBar = () => {
  const [isUserDetails, setIsUserDetails] = useState(false);

  const userDetailsRef = useRef<HTMLElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      userDetailsRef.current &&
      !userDetailsRef.current.contains(event.target as Node)
    ) {
      setIsUserDetails(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isLoggedIn = true;
  return (
    <ul className="text-white flex items-center gap-8">
      {NAV_LINKS.map((link) => (
        <li key={link.label} className="hidden md:block">
          <NavLink
            title={link.isReleased ? "" : "Coming soon..."}
            className={({ isActive }) =>
              cn(
                `text-white ${
                  link.isReleased && "hover:text-blue-200"
                } transition-all duration-300`,
                {
                  "text-blue-200": isActive,
                  "text-gray-500": !link.isReleased,
                  "cursor-not-allowed": !link.isReleased,
                }
              )
            }
            to={link.to}
          >
            {link.label}
          </NavLink>
        </li>
      ))}

      {isLoggedIn ? (
        <li className="relative" ref={userDetailsRef}>
          <div
            onClick={() => setIsUserDetails((prev) => !prev)}
            className="size-8 rounded-full outline outline-white cursor-pointer"
          >
            <img
              className="w-full rounded-full size-8 object-cover"
              src="https://cdn.pixabay.com/photo/2024/06/09/10/15/ai-generated-8818475_1280.png"
              alt=""
            />
          </div>

          {/* USER DETAILS */}
          <div
            className={`absolute w-40 top-12 border rounded-md border-gray-800 right-0 bg-slate-950 flex flex-col transition-all duration-300 z-[900] ${
              isUserDetails
                ? "opacity-100 visible -translate-y-0"
                : "opacity-0 invisible -translate-y-4"
            }`}
          >
            <Link
              className="text-white flex items-center gap-2 group/list w-full hover:bg-zinc-700 p-2"
              to="/account"
            >
              <User2 className="size-5 group-hover/list:text-blue-200" />
              <span className="group-hover/list:text-blue-200 transition-all duration-300">
                Account
              </span>
            </Link>

            <Link
              className="text-white flex items-center gap-2 group/list w-full hover:bg-zinc-700 p-2"
              to="/library"
            >
              <Library className="size-5 group-hover/list:text-blue-200" />
              <span className="group-hover/list:text-blue-200 transition-all duration-300">
                Library
              </span>
            </Link>

            <Link
              className="text-white flex items-center gap-2 group/list w-full hover:bg-zinc-700 p-2"
              to="/library"
            >
              <LogOut className="size-5 group-hover/list:text-blue-200" />
              <span className="group-hover/list:text-blue-200 transition-all duration-300">
                Logout
              </span>
            </Link>
          </div>
        </li>
      ) : (
        <li className="hidden md:block">
          <Link
            className={buttonVariants({
              variant: "secondary",
            })}
            to="/login"
          >
            Login
          </Link>
        </li>
      )}
    </ul>
  );
};

export default NavBar;
