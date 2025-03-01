import React, { useState, useEffect } from "react";
import CardItem from "./CardItem";
import Links from "./Links";
function Cards() {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setCards(data);
        setFilteredCards(data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };
    fetchCards();
  }, []);

  const filterCards = (category) => {
    if (category === "all") {
      setFilteredCards(cards);
    } else {
      setFilteredCards(cards.filter((card) => card.category === category));
    }
  };

  return (
    <div>
      <Links filterCards={filterCards} />
      <div className="grid grid-cols-4 gap-5">
        {filteredCards.map((card) => (
          <CardItem key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
