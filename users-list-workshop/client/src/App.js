import {useState, useEffect} from 'react';

import * as userService from './services/userService';

import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import { Search } from './components/search/Search';
import { UserList } from './components/user-list/UserList';
import './App.css';


function App() {
  return (
    <div className="App">
        <Header />
        <main className="main">
          <section className="card users-container">
            <Search />
            <UserList />
          </section>
        </main>

        <Footer />
    </div>
  );
}

export default App;
