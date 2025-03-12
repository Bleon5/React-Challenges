import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useApp } from "../context/AppContext";
function MainLayout() {
  const { checkAuth, token } = useAuth();
  const { fetchStudents } = useApp();

  useEffect(() => {
    checkAuth(token);
  }, [token]);

  useEffect(() => {
    fetchStudents("http://jsonplaceholder.typicode.com/users");
  }, []);
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
