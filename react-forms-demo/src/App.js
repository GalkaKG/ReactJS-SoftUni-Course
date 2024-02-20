import {useState} from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState(0);
  const [bio, setBio] = useState('');
  const [gender, setGender] = useState('f');
  const [userType, setUserType] = useState('');
  const [tac, setTac] = useState('false');

  const submitHandler = (e) => {
    e.preventDefault();
    
    // const formData = new FormData(e.currentTarget);
    // const username = formData.get('username');
    // const password = formData.get('password');
    // console.log(username);
    // console.log(password);

    
    // let values = Object.fromEntries(new FormData(e.target));
    // console.log(values);

    console.log(age);
  }

  const usernameChangeHandler = (e) => {
    // console.log(e.target.value);
    setUsername(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={submitHandler}>
            <div>
              <label htmlFor="username">Username</label>
              <input
                  id="username"
                  type="text"
                  name="username"
                  onChange={usernameChangeHandler}
                  value={username}
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input id="password" type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <div>
              <label htmlFor="age">Age</label>
              <input id="age" type="number" name="age" value={age} onChange={(e) => setAge(e.target.value)}/>
            </div>

            <div>
              <label htmlFor="bio" value={password} onChange={(e) => setPassword(e.target.value)}>Bio:</label>
              <textarea name="bio" id="bio" cols="30" rows="10" />
            </div>

            <div>
              <label htmlFor="gender">Gender: </label>
              <select name="gender" id="gender" value={gender} onSelect={(e) =>}>
                  <option value="m">Male</option>
                  <option value="f">Female</option>
              </select>
            </div>

            <div>
              <label htmlFor="individual-user-type">Individual:</label>
              <input type="radio" name="userType" value="individual" id="individual-user-type"/>
              <label htmlFor="corporate-user-type">Corporate:</label>
              <input type="radio" name="userType" value="corporate" id="corporate-user-type"/>
            </div>

            <div>
              <label htmlFor="tac">Terms and Conditions:</label>
              <input type="checkbox" name="tac" id="tac"/>
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
