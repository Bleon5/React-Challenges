import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Students from "./pages/Students";
import Student from "./pages/Student";
import { useEffect, useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setStudents(data));
  }, []);

  console.log(students);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="students" element={<Students students={students} />} />
            <Route
              path="students/:id"
              element={<Student students={students} />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
