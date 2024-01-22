import './App.css';
import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import { Search } from './components/search/Search';
import { UserList } from './components/user-list/UserList';
import {useState, useEffect} from 'react';

const baseUrl = 'http://localhost:3030/jsonstore'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
      fetch(`${baseUrl}/users`)
        .then(res => res.json())
        .then(result => {
          setUsers(Object.values(result));
          // console.log(result);
        })
  }, []);

  console.log(`This is users: ${JSON.stringify(users, null, 2)}`);

  return (
    <div className="App">
        <Header />
        <main className="main">
          <section className="card users-container">
            <Search />
            <UserList users={users} />
          </section>
        </main>

        <Footer />
    </div>
  );
}

export default App;
