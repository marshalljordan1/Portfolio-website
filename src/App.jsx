import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectCards from "./components/ProjectCards";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <ProjectCards />
    </BrowserRouter>
  );
}

export default App;
