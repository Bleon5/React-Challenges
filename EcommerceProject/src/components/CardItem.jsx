import React, { useState } from "react";
import Button from "./Button";

function CardItem({ card }) {
  const [inCart, setInCart] = useState(false);

  return (
    <div className="shadow-xl border rounded-lg">
      <figure className="bg-white h-48 p-3 rounded-lg">
        <img
          src={card.image}
          alt={card.title}
          className="object-contain h-full w-full"
        />
      </figure>
      <div className="card-body text-gray-400">
        <h2 className="text-xl">
          {card.title.length > 30
            ? card.title.substring(0, 30) + "..."
            : card.title}
        </h2>
        <p>{`${card.price}€`}</p>
      </div>
      <div className="flex justify-around items-center p-3">
        {inCart ? (
          <Button card={card} />
        ) : (
          <button
            className="bg-purple-700 p-3 rounded-lg text-white"
            onClick={() => setInCart(true)}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default CardItem;
