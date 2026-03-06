import PokemonCard from './components/PokemonCard';
import type { Pokemon } from './types';

interface AppProps {
  pokemonData: Pokemon;
}

export default function App({ pokemonData }: AppProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1>PokéAPI Prop Demo</h1>
      <PokemonCard pokemon={pokemonData} />
    </div>
  );
}