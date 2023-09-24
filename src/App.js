import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import each of pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Lookbook from './pages/Lookbook';
import Category from './pages/Category';
import News from './pages/News';
import Partnership from './pages/Partnership';

// Import each of components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/about' element={<About />} />
            <Route path='/lookbook' element={<Lookbook />} />
            <Route path='/category' element={<Category />} />
            <Route path='/partnership' element={<Partnership />} />
            <Route path='/news' element={<News />} />
          </Routes>
        <Footer />
      </Router>








    </div>
  );
}