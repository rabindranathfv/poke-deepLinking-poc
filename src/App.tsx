import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/Main.css';
// import Home from './views/Home';
// import PokemonDetails from './views/PokemonDetails';
import DeepLinking from './views/Deeplinking';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
        <Route path="/deeplinking" element={<DeepLinking />} /> */}
        <Route path="/" element={<DeepLinking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;