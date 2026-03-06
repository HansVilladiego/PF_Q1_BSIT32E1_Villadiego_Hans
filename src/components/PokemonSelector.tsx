import './PokemonSelector.css';

interface PokemonSelectorProps {
  onSelect: (name: string) => void;
}

const options = ['pikachu', 'charizard', 'gengar', 'squirtle', 'mewtwo'];

export default function PokemonSelector({ onSelect }: PokemonSelectorProps) {
  return (
    <div className="selector">
      <span className="selector-label">Select</span>
      <select className="selector-select" onChange={(e) => onSelect(e.target.value)} defaultValue="">
        <option value="" disabled>-- Choose --</option>
        {options.map(name => (
          <option key={name} value={name}>{name}</option>
        ))}
      </select>
    </div>
  );
}