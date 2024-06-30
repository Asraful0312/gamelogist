import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/shared/header/Header";
import Games from "./pages/Games";
import Footer from "./components/shared/Footer";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";

const App = () => {
  const location = useLocation();
  const { pathname } = location;

  console.log(pathname);

  return (
    <main>
      {pathname !== "/signin" && pathname !== "/sign-up" && <NavBar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/game/:id" element={<Games />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>

      {pathname !== "/signin" && pathname !== "/sign-up" && <Footer />}
    </main>
  );
};

export default App;
