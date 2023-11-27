import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Catalog from './Catalog';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import TestSlider from './swiper';
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

        </Routes>
        <TestSlider/>
        </div>
       </main>
      <Footer/>
    </Router>  
    </div>
  );
}

export default App;
