import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Pricing from './components/Pricing';
import Contacts from './components/Contacts';
import NotFound from './components/NotFound';
import Navigation from './components/Navigation';
import Products from './components/Products';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello React Router</h1>

      <Navigation />

      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/pricing/*' element={<Pricing />} />
        <Route path='/contacts' element={<Contacts />} />.
        <Route path='/products/:productId' element={<Products />} />
        <Route path='/products/1' element={<Products />} />
        <Route path='/millennium-falcon' element={<Navigate to={'/products/10'} />} />
      </Routes>
    </div>
  );
}

export default App;
