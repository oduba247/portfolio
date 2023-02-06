import Navbar from "./component/Navbar";
// import NavBar1 from "./component/NavBar1";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./component/About";
import Home from "./component/Home";
import Project from "./component/Project";
import Contact from "./component/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';


import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* <NavBar1/> */}

        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<Project />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
