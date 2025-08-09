import PokemonCard from './PokemonCard';
import './PokemonList.css'

const PokemonList = ({ pokemons }) => {
  return (
    <div className='PokemonList' >
      {pokemons.map((pokemon) => {
        return <PokemonCard key={pokemon.name} pokemon={pokemon} />
      })}
    </div>
  )
}

export default PokemonList;


