import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/shared/header/Header";
import Games from "./pages/Games";

const App = () => {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/game/:id" element={<Games />} />
      </Routes>
    </main>
  );
};

export default App;
