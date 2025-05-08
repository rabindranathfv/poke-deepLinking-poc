export interface Pokemon {
    name: string;
    url: string;
}

export interface PokemonDetail {
    id: number;
    name: string;
    types: Array<{ type: { name: string } }>;
    sprites: {
        front_default: string
    };
    height: number;
    weight: number;
}