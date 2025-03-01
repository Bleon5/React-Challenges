import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=10"
      );
      const data = await response.json();
      setPokemonList(data.results);
    };
    fetchPokemons();
  }, []);

  console.log(pokemonList);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Pokémon List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pokemonList.map((pokemon) => (
          <div key={pokemon.name} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{pokemon.name}</h2>
            <Link to={`/pokemon/${pokemon.name}`} className="text-blue-500">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
