import { Card } from 'antd'
import { Tag } from 'antd';
import StarButton from './StarButton';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../slices/dataSlice';

const PokemonCard = ({ pokemon }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setFavorite({id: pokemon.id}));
  }

  return (
    <Card
      title={pokemon.name}
      cover={<img src={pokemon.sprites.other.showdown.front_default} alt={pokemon.name} className='pokemon-card-image' />}
      extra={<StarButton isFavorite={pokemon.isFavorite} onClick={handleClick} />}
      onClick={() => window.open(`/pokemon/${pokemon.name}`, '_blank')}
    >
      {
        pokemon.types.map(type => <Tag key={type.type.name} className={`type_${type.type.name}`} >{type.type.name}</Tag> )
      }
    </Card>
  )
}

export default PokemonCard;
