import "./App.css";
import "./NavBar.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Newsletter } from "./components/Newsletter";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Newsletter />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
