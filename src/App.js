import { Routes, Route } from "react-router";
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
        <Routes>
          <Route path="/" element={<PokeSearcher />} />
          <Route path="/pokemon/:name" element={<PokemonDetail />} />
        </Routes>
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;
