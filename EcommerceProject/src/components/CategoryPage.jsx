import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardItem from "./CardItem";
function CategoryPage() {
  const { categoryName } = useParams();
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setFilteredCards(
          categoryName === "all"
            ? data
            : data.filter(
                (card) =>
                  card.category.toLowerCase() === categoryName.toLowerCase()
              )
        );
      } catch (error) {
        console.error("Error fetching category cards:", error);
      }
    };
    fetchCards();
  }, [categoryName]);

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-5">
        {categoryName.toUpperCase()}
      </h2>
      <div className="grid grid-cols-4 gap-5">
        {filteredCards.map((card) => (
          <CardItem key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
