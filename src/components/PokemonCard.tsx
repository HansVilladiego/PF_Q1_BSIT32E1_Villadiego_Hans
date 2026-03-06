import type { Pokemon } from '../types';
import './PokemonCard.css';

interface Props {
  pokemon: Pokemon;
}

export default function PokemonCard({ pokemon }: Props) {
  return (
    <div className="card">
      <div className="card-glow" />
      <div className="card-id">#{String(pokemon.id).padStart(3, '0')}</div>
      <h2 className="card-name">{pokemon.name}</h2>
      <div className="card-image-wrapper">
        <img src={pokemon.imageUrl} alt={pokemon.name} className="card-image" />
      </div>
      <div className="card-stats">
        <div className="card-stat">
          <div className="card-stat-label">HEIGHT</div>
          <div className="card-stat-value">{pokemon.height / 10}m</div>
        </div>
        <div className="card-stat">
          <div className="card-stat-label">WEIGHT</div>
          <div className="card-stat-value">{pokemon.weight / 10}kg</div>
        </div>
      </div>
    </div>
  );
}