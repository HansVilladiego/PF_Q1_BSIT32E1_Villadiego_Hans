import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import type { Pokemon } from './types'

fetch('https://pokeapi.co/api/v2/pokemon/eevee')
  .then(response => response.json())
  .then(data => {
    const cleanPokemon: Pokemon = {
      id: data.id,
      name: data.name,
      height: data.height,
      weight: data.weight,
      imageUrl: data.sprites.front_default
    };

    createRoot(document.getElementById('root')!).render(
      <StrictMode>
        <App pokemonData={cleanPokemon} />
      </StrictMode>
    )
  });