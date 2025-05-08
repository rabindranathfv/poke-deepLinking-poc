import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/Main.css';
import Home from './views/Home';
import PokemonDetails from './views/PokemonDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;