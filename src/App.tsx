import "./App.css";

import About from "./page/about/about";
import Home from "./page/home/home";
import Contact from "./page/contact/contact";
import Project from "./page/project/project";
import NavBar from "./component/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="Content">
        <Home />
        <About />
        <Project />
        <Contact />
      </div>
    </div>
  );
}

export default App;
