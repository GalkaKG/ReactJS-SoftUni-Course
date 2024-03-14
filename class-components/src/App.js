import { Component } from 'react';
import TaskList from './components/TaskList';
import './App.css';


class App extends Component {
    render() {
      return(
        <div className="App">
          <main className="App-header">
            <TaskList />
          </main>
        </div>
      );
    }
}

export default App;
