import { useParams } from 'react-router';
import { getPokemonDetailsByName } from '../../api';
import { useState, useEffect } from 'react';
import { Layout, Grid, Col, Row } from 'antd';
import './style.css';

const PokemonDetail = () => {
  const { name } = useParams();
  const { Header, Footer, Content } = Layout;

  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    getPokemonDetailsByName(name).then(setPokemonDetails);
  }, [name]);

  if (!pokemonDetails) {
    return <div>Pokemon {name} not found </div>;
  }

  return (
    <Layout>
      <Header><h2>{pokemonDetails.name}</h2></Header>
      <Row justify="center" align="top">
        <Col span={6} >
          <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name}  />
          <div className="statistics">
            <p>statistics</p>
          </div>
        </Col>
        <Col span={6} >
          <div className="types">
            <p>Types:</p>
          </div>
          <div className="weaknesses">
            <p>Weaknesses:</p>
          </div>
        </Col>
      </Row>
      <Footer>Footer</Footer>
    </Layout>
  )
}

export default PokemonDetail;
