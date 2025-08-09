import './App.css';
import { Col, Spin } from 'antd';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonWithDetails } from './slices/dataSlice';

function App() {
  const pokemons = useSelector(state => state.data.pokemons);
  const loading = useSelector(state => state.ui.loading);
  const pokeLimit = 20;
  const [pokeOffset, setPokeOffset] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonWithDetails({ limit: pokeLimit, offset: pokeOffset }));
  }, [dispatch, pokeLimit, pokeOffset]);

  const handleScroll = (e) => {
    const reachedBottom = Math.ceil(e.target.scrollTop + e.target.clientHeight) >= e.target.scrollHeight;
    if (reachedBottom && !loading) {
      setPokeOffset((prevOffset) => prevOffset + pokeLimit);
    }
  }
  
  return (
    <div className="App" onScroll={handleScroll}>
      <Col span={4} offset={10}>
        <img src="https://raw.githubusercontent.com/musartedev/curso-redux/27298f5dd3e37caf2a90a7a82580cd2905fcab31/src/statics/logo.svg" alt='PokeDux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher></Searcher>
      </Col >
      <PokemonList pokemons={pokemons} />
      {
        loading ? (<Col offset={12} ><Spin spinning size="large" /> </Col>) : null
      }
    </div>
  );
}

export default App;
