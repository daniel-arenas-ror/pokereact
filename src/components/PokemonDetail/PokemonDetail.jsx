import { useParams } from 'react-router';
import { getPokemonDetailsByName } from '../../api';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from "../../slices/uiSlice";
import { Layout, Col, Row, Divider, Progress, Flex, Statistic } from 'antd';
import { Spin } from 'antd';
import { Tag } from 'antd';
import { Card } from 'antd';
import './style.css';

const PokemonDetail = () => {
  const { name } = useParams();
  const loading = useSelector(state => state.ui.loading);
  const dispatch = useDispatch();
  const { Footer } = Layout;
  const [percent, setPercent] = useState(0);

  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    dispatch(setLoading(true));
    setTimeout(function(){
      getPokemonDetailsByName(name).then(setPokemonDetails);
      let ptg = -10;

      const interval = setInterval(() => {
        ptg += 5;
        setPercent(ptg);
  
        if (ptg > 120) {
          clearInterval(interval);
          dispatch(setLoading(false));
          setPercent(0);
        }
      //}, 100);
    }, 0);
    //}, 1000);
    }, 0);
  }, [name]);

  if (!pokemonDetails && !loading) {
    return <div>Pokemon {name} not found </div>;
  }

  if (loading) {
    return <Spin spinning={loading} percent={percent} fullscreen />;
  }

  return (
    <Layout>
      <h1><Divider>{pokemonDetails.name.toUpperCase()} - {pokemonDetails.id}</Divider></h1>
      <Row justify="center" align="top">
        <Col span={6} >
          <Card >
            <img src={pokemonDetails.sprites.other.showdown.front_default} alt={pokemonDetails.name}  />
            <img src={pokemonDetails.sprites.other.showdown.back_default} alt={pokemonDetails.name}  />
          </Card>

          <div className="statistics">
            <Card>
              <Flex gap="small" vertical>
                {
                  pokemonDetails.stats.map(stat => {
                    return (
                      <div>
                        {stat.stat.name + ': '} <Progress key={`id_stats_${stat.stat.name}`} percent={stat.base_stat} status="active" title={stat.stat.name} />
                      </div>
                    )
                  })
                }
              </Flex>
            </Card>
          </div>
        </Col>
        <Col span={6} >
          <div className="stats">
            <Card>
              <Row gutter={16}>
                <Col span={12}>
                  <Statistic title="Weight" value={pokemonDetails.weight} />
                </Col>
                <Col span={12}>
                  <Statistic title="height" value={pokemonDetails.height} />
                </Col>
              </Row>
            </Card>
          </div>
          <div className="types">
            <Card>
              <Divider orientation="left">Types</Divider>
              <Flex gap="4px 0" wrap>
                {
                  pokemonDetails.types.map(type => <Tag key={`id_type_${type.slot}`} className={`type_${type.type.name}`} >{type.type.name}</Tag> )
                }
              </Flex>
            </Card>
          </div>
          <div className="weaknesses">
            <Card>
              <Divider orientation="left">Abilities</Divider>
              <Flex gap="4px 0" wrap>
                {
                  pokemonDetails.abilities.map(ability => <Tag key={`id_ability_${ability.ability.name}`} >{ability.ability.name}</Tag> )
                }
              </Flex>
            </Card>
          </div>
        </Col>
      </Row>
    </Layout>
  )
}

export default PokemonDetail;
