import { useEffect, useState } from 'react';
import { fetchPokemons } from '../api';
import PokemonCard from '../components/PokemonCard';
import '../styles/Main.css';
import type { Pokemon } from '../types/pokemon';
import Loader from '../components/Loader';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPokemons().then(data => {
      setPokemons(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loader />;

  return (
    <>
     <Header />
    <div >
      <h1 className="title">Pokédex</h1>
      <div className="pokemon-container">
        {pokemons.map((p, index) => (
          <PokemonCard key={p.name} name={p.name} index={index} />
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Home;