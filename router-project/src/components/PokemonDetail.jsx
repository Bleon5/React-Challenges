// src/components/PokemonDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokemonDetail = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      setPokemon(data);
    };

    fetchPokemon();
  }, [name]);

  if (!pokemon) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">{pokemon.name}</h1>
      <div className="flex justify-center mb-6">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-48 h-48"
        />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">Types:</h2>
        <p>{pokemon.types.map((type) => type.type.name).join(", ")}</p>
        <h2 className="text-xl font-semibold mt-4">Abilities:</h2>
        <p>
          {pokemon.abilities.map((ability) => ability.ability.name).join(", ")}
        </p>
        <h2 className="text-xl font-semibold mt-4">Stats:</h2>
        <ul>
          {pokemon.stats.map((stat) => (
            <li key={stat.stat.name}>
              {stat.stat.name}: {stat.base_stat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonDetail;
