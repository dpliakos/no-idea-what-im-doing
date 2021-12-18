import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h3> Aloha </h3>
        <h3>REACT_APP_ENVIRONMENT: {process.env.REACT_APP_ENVIRONMENT} </h3>
        <h3>NODE_ENV: {process.env.NODE_ENV} </h3>
        <h3>REACT_APP_CONFIGURABLE: {process.env.REACT_APP_CONFIGURABLE} </h3>
      </header>
    </div>
  );
}

export default App;
