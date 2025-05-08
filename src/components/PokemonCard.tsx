import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Main.css';

interface PokemonCardProps {
  name: string;
  index: number;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, index }) => {
  return (
    <Link to={`/pokemon/${index + 1}`} className="pokemon-card">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
        alt={name}
        className="pokemon-image"
      />
      <p className="pokemon-name">{name}</p>
    </Link>
  );
};

export default PokemonCard;