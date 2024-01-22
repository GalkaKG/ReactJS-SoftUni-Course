import './App.css';
import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import { Search } from './components/search/Search';
import { UserSection } from './components/user-section/UserSection';
import {useState, useEffect} from 'react';

const baseUrl = 'http://localhost:3030/jsonstore'

function App() {
  const [users, setUsers] = useState();

  useEffect(() => {
      fetch(`${baseUrl}/users`)
        .then(res => res.json())
        .then(result => {
          result.users
        })
  }, []);

  return (
    <div className="App">
        <Header />
        <main className="main">
          <section className="card users-container">
            <Search />
            <UserSection />
          </section>
        </main>

        <Footer />
    </div>
  );
}

export default App;
