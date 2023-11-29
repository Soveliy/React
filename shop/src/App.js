import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Catalog from './Catalog';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import ProductDetail from './ProductDetail';
import TestSlider from './swiper';
import ProductCard from './ProductCard';
import productsList from './CatalogData';
import './App.css'
function App() {
  return (
    <div>   
    <Router>
      <Header/>
       <main>
        <div className="container">
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/product/:id'  element={<ProductDetail/>} />
        </Routes>

        </div>
       </main>
      <Footer/>
    </Router>  
    </div>
  );
}

export default App;
