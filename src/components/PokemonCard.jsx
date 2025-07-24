import { Card } from 'antd'
import { Badge } from 'antd';
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
      cover={<img src={pokemon.sprites.front_default} alt={pokemon.name} />}
      extra={<StarButton isFavorite={pokemon.isFavorite} onClick={handleClick} />}
    >
      {
        pokemon.types.map(type => <Badge key={type.type.name} count={type.type.name}></Badge> )
      }
    </Card>
  )
}

export default PokemonCard;
