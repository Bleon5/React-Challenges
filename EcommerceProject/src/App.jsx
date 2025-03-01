import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cards from "./components/Cards";
import CategoryPage from "./components/CategoryPage";
import Header from "./components/Header";
import Cart from "./components/Cart";

function App() {
  return (
    <Router>
      <div className="bg-pink-500 mb-3">
        <Header />
      </div>
      <div className="container m-auto">
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
