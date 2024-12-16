import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/shared/header/Header";
import Games from "./pages/Games";
import Footer from "./components/shared/Footer";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import WishList from "./pages/WishList";
import GameDetails from "./pages/GameDetails";
import ScrollToTop from "./utils/scrollToTop";
import { Toaster } from "./components/ui/toaster";
import BubbleCursor from "./components/BubbleCursor";

const App = () => {
  const location = useLocation();
  const { pathname } = location;

  console.log(pathname);

  return (
    <main className="">
      {pathname !== "/sign-in" && pathname !== "/sign-up" && <NavBar />}
      <BubbleCursor />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/:id" element={<Games />} />
        <Route path="/game/:id" element={<GameDetails />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/account" element={<Account />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>

      {pathname !== "/sign-in" && pathname !== "/sign-up" && <Footer />}
      <Toaster />
    </main>
  );
};

export default App;
