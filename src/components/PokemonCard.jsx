import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd'
import Meta from 'antd/es/card/Meta';


const PokemonCard = ({ pokemon }) => {
  return (
    <Card
      title={pokemon.name}
      cover={<img src={pokemon.sprites.front_default} alt={pokemon.name} />}
      extra={<StarOutlined/>}
    >
      {
        pokemon.types.map(type => <Meta key={type.name} description={type.name}></Meta> )
      }
    </Card>
  )
}

export default PokemonCard;
