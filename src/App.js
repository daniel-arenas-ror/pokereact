import './App.css';
import { Col, Spin } from 'antd';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonWithDetails } from './slices/dataSlice';

function App() {
  const pokemons = useSelector(state => state.data.pokemons);
  const loading = useSelector(state => state.ui.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonWithDetails());
  }, []);
  
  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src="https://raw.githubusercontent.com/musartedev/curso-redux/27298f5dd3e37caf2a90a7a82580cd2905fcab31/src/statics/logo.svg" alt='PokeDux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher></Searcher>
      </Col >
      {
        loading ? (<Col offset={12} ><Spin spinning size="large" /> </Col>) : (<PokemonList pokemons={pokemons} />)
      }
    </div>
  );
}

export default App;
