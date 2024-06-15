import { Link } from "react-router-dom";
import Wrapper from "../Wrapper";
import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu"; // Assuming MobileMenu is a .tsx file

const Header = () => {
  return (
    <header>
      <Wrapper className="flex items-center justify-between h-16 border-b border-b-gray-800">
        {/* LOGO */}
        <Link className="text-white font-bold text-xl" to="/">
          GAMELOGIST
        </Link>

        {/* NAV BAR */}
        <NavBar />

        <div className="block md:hidden">
          <MobileMenu />
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
