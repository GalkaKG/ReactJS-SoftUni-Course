import logo from './logo.svg';
import './App.css';

function App() {

  const submitHandler = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const username = formData.get('username');
    const password = formData.get('password');
    console.log(username);
    console.log(password);
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={submitHandler}>
            <div>
              <label htmlFor="username">Username</label>
              <input id="username" type="text" name="username" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input id="password" type="text" name="password"/>
            </div>
            <div>
              <input type="submit" value="Login" />
              {/* <button type="submit">Login</button> */}
            </div>
        </form>
        {/* <button type="button">Click</button> */}
      </header>
    </div>
  );
}

export default App;
