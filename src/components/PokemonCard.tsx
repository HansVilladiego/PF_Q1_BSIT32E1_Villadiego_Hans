import type { Pokemon } from '../types';

interface Props {
  pokemon: Pokemon;
}

export default function PokemonCard({ pokemon }: Props) {
  return (
    <div style={{ border: '2px solid #ccc', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
      <h2>#{pokemon.id} — {pokemon.name.toUpperCase()}</h2>
      <img src={pokemon.imageUrl} alt={pokemon.name} width="150" />
      <p><strong>Height:</strong> {pokemon.height}</p>
      <p><strong>Weight:</strong> {pokemon.weight}</p>
    </div>
  );
}