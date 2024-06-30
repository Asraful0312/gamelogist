import Wrapper from "../Wrapper";
import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu"; // Assuming MobileMenu is a .tsx file
import Logo from "../Logo";

const Header = () => {
  return (
    <header className="px-10 relative mb-28">
      <Wrapper className=" flex items-center justify-between h-14 fixed top-0 left-0 right-0 rounded-[36px] w-full z-50">
        {/* Blurred Background */}
        <div className="absolute inset-0 bg-transparent backdrop-blur-xl border border-white/30 rounded-[36px] mx-5"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-between w-full px-4">
          {/* LOGO */}
          <Logo />

          <div className="flex items-center gap-2">
            {/* NAV BAR */}
            <NavBar />

            <div className="block md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
