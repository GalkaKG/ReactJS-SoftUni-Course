import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState();

  useEffect(() => {
    setState(() => () => <h1>Hello from state</h1>);
  }, [])
  return (
    <div className="App">
      {state && state()}
    </div>
  );
}

export default App;
