import React, { useState, useEffect } from "react";

function Cart() {
  const [items, setItems] = useState([]);
  const [count, setCounter] = useState(0);

  useEffect(() => {
    const fetchItems = () => {
      const savedItems = localStorage.getItem("items");

      if (savedItems) {
        try {
          const parsedItems = JSON.parse(savedItems);
          setItems(parsedItems);
        } catch (e) {
          console.error("Error parsing saved items:", e);
          setItems([]);
        }
      } else {
        setItems([]);
      }
    };

    fetchItems();
  }, []);
  return (
    <div className="container mx-auto text-white py-5">
      <h1 className="text-3xl mb-5">Your Cart</h1>
      {items.length > 0 ? (
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex justify-between items-center">
              <img src={item.image} alt={item.title} />
              <p>{item.description}</p>
              <div className="btn">
                <button onClick={() => setCounter((prev) => prev - 1)}>
                  -
                </button>
                <p>{count}</p>
                <button onClick={() => setCounter((prev) => prev + 1)}>
                  +
                </button>
              </div>
              <span>{item.price}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;
