import { useParams } from 'react-router';
import { getPokemonDetailsByName } from '../../api';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from "../../slices/uiSlice";
import { Layout, Col, Row, Divider, Progress, Flex } from 'antd';
import { Spin } from 'antd';
import { Tag } from 'antd';
import './style.css';

const PokemonDetail = () => {
  const { name } = useParams();
  const loading = useSelector(state => state.ui.loading);
  const dispatch = useDispatch();
  const { Header, Footer } = Layout;
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
      }, 100);
    }, 2000);
  }, [name]);

  if (!pokemonDetails && !loading) {
    return <div>Pokemon {name} not found </div>;
  }

  if (loading) {
    return <Spin spinning={loading} percent={percent} fullscreen />;
  }

  return (
    <Layout>
      <h1><Divider>{pokemonDetails.name}</Divider></h1>
      <Row justify="center" align="top">
        <Col span={6} >
          <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name}  />
          <div className="statistics">
            <Flex gap="small" vertical>
              <Progress percent={30} status="active" />
              <Progress percent={50} status="active" />
              <Progress percent={70} status="exception" />
              <Progress percent={100} status="active"/>
              <Progress percent={50} status="active" />
            </Flex>
          </div>
        </Col>
        <Col span={6} >
          <div className="types">
            <Divider orientation="left">Types</Divider>
            <Flex gap="4px 0" wrap>
              <Tag color="magenta">magenta</Tag>
              <Tag color="red">red</Tag>
              <Tag color="volcano">volcano</Tag>
              <Tag color="orange">orange</Tag>
              <Tag color="gold">gold</Tag>
              <Tag color="lime">lime</Tag>
              <Tag color="green">green</Tag>
              <Tag color="cyan">cyan</Tag>
              <Tag color="blue">blue</Tag>
              <Tag color="geekblue">geekblue</Tag>
              <Tag color="purple">purple</Tag>
            </Flex>
          </div>
          <div className="weaknesses">
            <Divider orientation="left">Weaknesses</Divider>
            <Flex gap="4px 0" wrap>
              <Tag color="#f50">#f50</Tag>
              <Tag color="#2db7f5">#2db7f5</Tag>
              <Tag color="#87d068">#87d068</Tag>
              <Tag color="#108ee9">#108ee9</Tag>
            </Flex>
          </div>
        </Col>
      </Row>
      <Footer>Footer</Footer>
    </Layout>
  )
}

export default PokemonDetail;
