import type { Pokemon, PokemonDetail } from "./types/pokemon";

export const fetchPokemons = async(): Promise<Pokemon[]> => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const data = await res.json();
    return data.results;
};

export const fetchPokemonById = async(id: number): Promise<PokemonDetail> => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return await res.json();
}