import { useEffect } from "react";
import { initSmoothScroll } from "./utils/smoothScroll";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    initSmoothScroll();
  }, []);

  return <Home />;
}

export default App;
