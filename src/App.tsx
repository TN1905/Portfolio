import "./App.css";

import About from "./page/About/about";
import Home from "./page/Home/home";
import Contact from "./page/Contact/contact";
import Project from "./page/Project/project";
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
