import { MenuIcon } from "lucide-react";
import { SheetContent, SheetTrigger, Sheet } from "../../ui/sheet";
import { NAV_LINKS } from "./NavBar";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "../../ui/button";
import { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="block md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className="group -m-2 flex items-center p-2 md:hidden">
          <MenuIcon className="block md:hidden text-white" />
        </SheetTrigger>
        <SheetContent className="flex flex-col w-full pr-0 max-w-xs md:hidden">
          <ul className="flex flex-col items-center gap-5 pt-20">
            {NAV_LINKS.map((link) => (
              <li
                onClick={() => setIsOpen(false)}
                key={link.label}
                className=""
              >
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

            <li>
              <SheetTrigger asChild>
                <NavLink to="/sign-in">
                  <Button size="lg">Login</Button>
                </NavLink>
              </SheetTrigger>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
