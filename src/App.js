import './App.css';
import { Col } from 'antd';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { useEffect, useState } from 'react';
import { getPokemon } from './api';
import { connect } from 'react-redux';
import { setPokemons as setPokemonsActions } from './actions';

function App({ pokemons, setPokemons }) {
  useEffect(() => {
    const fetchPokemont = async () => {
      const pokemonsRes = await getPokemon();
      setPokemons(pokemonsRes)
    };

    fetchPokemont();
  }, []);
  
  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src="https://raw.githubusercontent.com/musartedev/curso-redux/27298f5dd3e37caf2a90a7a82580cd2905fcab31/src/statics/logo.svg" alt='PokeDux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher></Searcher>
      </Col >

      <PokemonList pokemons={pokemons} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  pokemons: state.pokemons
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
