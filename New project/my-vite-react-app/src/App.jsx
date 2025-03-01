import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainTemplate from "./templates/MainTemplate";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainTemplate />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="login" />
          <Route path="register" />
          <Route path="secure">
            <Route path="" />
            <Route path="settings" />
          </Route> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
