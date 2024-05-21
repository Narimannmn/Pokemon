import React from 'react';

function PokemonCard({ pokemon }) {
    return (
        <div className="pokemon-card">
            <img src={pokemon.image} alt={pokemon.name} className="pokemon-image" />
            <h2 className="pokemon-name">{pokemon.name}</h2>
            <p className="pokemon-number">#{pokemon.number}</p>
            <div className="pokemon-type">Type: {pokemon.type}</div>
            <div className="pokemon-abilities">Abilities: {pokemon.abilities.join(', ')}</div>
        </div>
    );
}

export default PokemonCard;
