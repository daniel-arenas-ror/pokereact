import { useParams } from 'react-router';
import { getPokemonDetailsByName } from '../api';
import { useState, useEffect } from 'react';

const PokemonDetail = () => {
  const { name } = useParams();

  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    getPokemonDetailsByName(name).then(setPokemonDetails);
  }, [name]);

  if (!pokemonDetails) {
    return <div>Pokemon {name} not found </div>;
  }

  return (
    <div>
      <h1>Pokemon Detail</h1>
      <h2>{pokemonDetails.name}</h2>
      <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
      <p>Height: {pokemonDetails.height}</p>
      <p>Weight: {pokemonDetails.weight}</p>
      <p>Types: {pokemonDetails.types.map(type => type.type.name).join(', ')}</p>
      <p>Abilities: {pokemonDetails.abilities.map(ability => ability.ability.name).join(', ')}</p>
      <p>Stats: {pokemonDetails.stats.map(stat => stat.stat.name).join(', ')}</p>
    </div>
  )
}

export default PokemonDetail;
