import React, { useState, useEffect } from 'react';
import './PokemonSection.css'
import {pokemonService} from "../../service/pokemonService";

function PokemonSection() {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await pokemonService.getAllPokemon({ offset: 0, limit: 4 });
                setPokemonList(response.data.results);
            } catch (error) {
                console.error('Error fetching Pokemon:');
            }
        }

        fetchData();
        return () => {
        };
    }, []);

    return (
        <div className="pokemon-section">
            <div className="pokemon-row">
                {pokemonList.map((pokemon, index) => (
                    <div key={index} className="pokemon-card">
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +1}.png`}
                            alt={pokemon.name}
                            className="pokemon-image"
                        />
                        <h2 className="pokemon-name">{pokemon.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PokemonSection;
