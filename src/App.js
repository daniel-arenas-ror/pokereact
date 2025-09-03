import { Routes, Route } from "react-router";
import PokeSearcher from "./components/PokeSearcher";
import PokemonDetail from "./components/PokemonDetail/PokemonDetail";

function App() {

  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PokeSearcher />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
      </Routes>
    </div>
  );
}

export default App;
