import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './pages/Produtos';
import FAQ from './pages/FAQ';
import Contato from './pages/Contato';
import Home from './pages/Home';
import Sobre from './pages/Sobre'
import NotFound from "./pages/Erro";



export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/produtos" element={<Products />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/" element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}