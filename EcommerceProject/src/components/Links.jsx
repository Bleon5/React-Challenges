import React from "react";
import { useNavigate } from "react-router-dom";

function Links({ filterCards }) {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    filterCards(category);
    navigate(`/category/${category}`);
  };

  return (
    <div className="flex gap-5 text-purple-800 mb-5">
      <button
        onClick={() => handleCategoryClick("all")}
        className="border p-3 rounded-lg hover:bg-purple-800 hover:text-black"
      >
        All
      </button>
      <button
        onClick={() => handleCategoryClick("electronics")}
        className="border p-3 rounded-lg hover:bg-purple-800 hover:text-black"
      >
        Electronics
      </button>
      <button
        onClick={() => handleCategoryClick("jewelery")}
        className="border p-3 rounded-lg hover:bg-purple-800 hover:text-black"
      >
        Jewelry
      </button>
      <button
        onClick={() => handleCategoryClick("men's clothing")}
        className="border p-3 rounded-lg hover:bg-purple-800 hover:text-black"
      >
        Men's Clothing
      </button>
      <button
        onClick={() => handleCategoryClick("women's clothing")}
        className="border p-3 rounded-lg hover:bg-purple-800 hover:text-black"
      >
        Women's Clothing
      </button>
    </div>
  );
}

export default Links;
