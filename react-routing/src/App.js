import { Routes, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello React Router</h1>

      <Routes>
        <Route path='/' element={<h2>Home page</h2>} />
        <Route path='/about' element={<h2>About page</h2>} />
        <Route path='/pricing' element={<h2>Pricing page</h2>} />
        <Route path='/contacts' element={<h2>Contacts page</h2>} />
      </Routes>
    </div>
  );
}

export default App;
