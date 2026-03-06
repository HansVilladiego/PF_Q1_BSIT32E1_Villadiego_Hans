import { useState } from 'react';
import PokemonCard from './components/PokemonCard';
import PokemonSelector from './components/PokemonSelector';
import type { Pokemon } from './types';
import './App.css';

export default function App() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(false);

  function handleSelect(name: string) {
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())
      .then(data => {
        setPokemon({
          id: data.id,
          name: data.name,
          height: data.height,
          weight: data.weight,
          imageUrl: data.sprites.front_default,
        });
        setLoading(false);
      });
  }

  return (
    <div className="app">
      <div className="app-header">
        <p className="app-subtitle">Powered by PokéAPI</p>
        <h1 className="app-title">Pokédex</h1>
      </div>
      <div className="app-selector">
        <PokemonSelector onSelect={handleSelect} />
      </div>
      {loading && <p className="app-loading">LOADING...</p>}
      {!loading && pokemon && <PokemonCard pokemon={pokemon} />}
      {!loading && !pokemon && <p className="app-empty">← SELECT A POKÉMON TO BEGIN</p>}
    </div>
  );
}