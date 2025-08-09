import { useParams } from 'react-router';

const PokemonDetail = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <h1>Pokemon Detail</h1>
    </div>
  )
}

export default PokemonDetail;
