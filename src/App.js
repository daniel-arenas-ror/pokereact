import { Routes, Route, HashRouter} from "react-router";
import { Layout } from 'antd';
import PokeSearcher from "./components/PokeSearcher";
import PokemonDetail from "./components/PokemonDetail/PokemonDetail";
import Footer from "./components/Footer";
import './App.css';

const { Content } = Layout;

function App() {
  return (
    <Layout className="app-layout">
      <Content className="app-content">
        <HashRouter>
          <Routes>
          <Route path="/" element={<PokeSearcher />} />
          <Route path="/pokemon/:name" element={<PokemonDetail />} />
            <Route path="/pokereact" element={<PokeSearcher />} />
            <Route path="/pokereact/pokemon/:name" element={<PokemonDetail />} />
          </Routes>
        </HashRouter>
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;
