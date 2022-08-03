import React, { useState } from 'react';

interface PokedexProps {
    
}

const PokemonArry: string[] = ["Pikachou", "Ditto", "metapod"]  //teste

export const Pokedex: React.FC<PokedexProps> = () => {

    const [Pokemons, setPokemons] = useState<string[]>(PokemonArry);
    const [selecinarPokemon, setSelecinarPokemon] = useState<String | undefined>(undefined);


    return (
        <div>
            <h1>
                Pokedex
            </h1>
            Pokemons: 
        {Pokemons.map((Pokemon) => <button onClick={() => setSelecinarPokemon(Pokemon)}>{Pokemon}</button>)}
            
            <h2>Pokemon Selecinado: {selecinarPokemon ? selecinarPokemon : "Nenhum pokemon selecinado" }</h2>
        </div>
    );
};

export default Pokedex;