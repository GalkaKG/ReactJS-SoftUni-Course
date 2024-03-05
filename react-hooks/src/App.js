import { useEffect, useState } from 'react';
import TaskList from './components/TaskList';
import styles from './App.module.css';


function App() {
  
  return (
    <div className={styles['site-wrapper']}>
      <header>TODO App</header>

      <main>
          <TaskList />
      </main>
    </div>
  );
}

export default App;
