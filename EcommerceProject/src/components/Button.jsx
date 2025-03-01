import React, { useState, useEffect } from "react";

function Button({ card }) {
  // Pass card as a prop to Button
  const [counter, setCounter] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = () => {
      const savedItems = localStorage.getItem("items");

      // Check if savedItems exists and is a valid JSON string
      if (savedItems) {
        try {
          const parsedItems = JSON.parse(savedItems);
          setItems(parsedItems);
          setCounter(parsedItems.length); // Assuming `items` are an array and counter is the item count
        } catch (e) {
          console.error("Error parsing saved items:", e);
          setItems([]);
          setCounter(0); // Default to zero if parsing fails
        }
      } else {
        setItems([]);
        setCounter(0); // Default to zero if no items exist
      }
    };
    fetchItems();
  }, []); // Run once on mount

  const addItemToCart = () => {
    const updatedItems = [...items, card]; // Add the full card object to the cart
    setItems(updatedItems);
    setCounter(updatedItems.length);

    // Save updated items to localStorage
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };

  const removeItemFromCart = () => {
    if (counter > 0) {
      const updatedItems = items.slice(0, -1); // Remove the last item from the cart if counter > 0
      setItems(updatedItems);
      setCounter(updatedItems.length);

      // Save updated items to localStorage
      localStorage.setItem("items", JSON.stringify(updatedItems));
    }
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={removeItemFromCart}
        className="bg-purple-700 p-5 rounded-lg text-white"
      >
        -
      </button>
      <p className="text-white">{counter}</p>
      <button
        onClick={addItemToCart}
        className="bg-purple-700 p-5 rounded-lg text-white"
      >
        +
      </button>
    </div>
  );
}

export default Button;
