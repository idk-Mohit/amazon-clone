import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components/index";
import { Home,NotFound } from "./pages";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/notfound"} element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
