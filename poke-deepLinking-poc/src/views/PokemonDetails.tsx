import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchPokemonById } from '../api';
import Loader from '../components/Loader';
import type { PokemonDetail } from '../types/pokemon';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchPokemonById(parseInt(id, 10)).then(data => {
        setPokemon(data);
        setLoading(false);
      });
    }
  }, [id]);

  if (loading) return <Loader />;

  if (!pokemon) return <p>Pokémon not found.</p>;

  return (
    <>
    <Header />
    <div className="container">
      <Link to="/" className="back-button">← Back</Link>

      <div className="pokemon-detail">
        <h1 className="title">{pokemon.name.toUpperCase()}</h1>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-image" />
        <p><strong>Height:</strong> {pokemon.height}</p>
        <p><strong>Weight:</strong> {pokemon.weight}</p>
        <p><strong>Types:</strong> {pokemon.types.map(t => t.type.name).join(', ')}</p>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default PokemonDetails;