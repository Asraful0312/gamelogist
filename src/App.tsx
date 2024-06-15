import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/shared/header/Header";

const App = () => {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
};

export default App;
