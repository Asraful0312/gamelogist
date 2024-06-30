import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Wrapper from "./Wrapper";
import { NAV_LINKS } from "./header/NavBar";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SendHorizonal } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/developers?key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const data = await response.json();
    setData(data);
  };

  console.log(data);

  return (
    <footer className="w-full py-20 bg-neutral-900">
      <Wrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div>
            <Logo />
            <p className="text-muted-foreground mt-6 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
              excepturi atque minima saepe, unde rerum!
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h2 className="font-medium underline text-lg mb-6">Quick Links</h2>

            <ul className="flex flex-col gap-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.label} className="">
                  <NavLink
                    title={link.isReleased ? "" : "Coming soon..."}
                    className={({ isActive }) =>
                      cn(
                        `text-white ${
                          link.isReleased && "hover:text-lightBlue"
                        } transition-all duration-300`,
                        {
                          "text-lightBlue": !link.isReleased && isActive,
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
            </ul>
          </div>

          {/* SUPPORTS*/}
          <div className="">
            <h2 className="font-medium underline text-lg mb-6">Supports</h2>

            <ul className="flex flex-col gap-3 text-sm">
              <li className="text-white cursor-pointer hover:text-lightBlue transition-all duration-300">
                Privacy Policy
              </li>
              <li className="text-white cursor-pointer hover:text-lightBlue transition-all duration-300">
                Terms & Conditions
              </li>
              <li className="text-white cursor-pointer hover:text-lightBlue transition-all duration-300">
                Help & Supports
              </li>
              <li className="text-white cursor-pointer hover:text-lightBlue transition-all duration-300"></li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h2
              onClick={fetchData}
              className="font-medium underline text-lg mb-6"
            >
              Newsletter
            </h2>

            <p className="text-sm">
              Subscribe our newsletter to get latest updates & news.
            </p>

            <form className="flex items-center mt-4">
              <Input
                className="bg-neutral-800 border-none"
                placeholder="example@gmail.com"
              />
              <Button
                type="submit"
                className="py-4 transition-all duration-300"
                variant="ghost"
              >
                <SendHorizonal className="size-4 " />
              </Button>
            </form>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
