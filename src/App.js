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
        <h3>Environment: {process.env.REACT_APP_ENVIRONMENT} </h3>
        <h3>Environment: {process.env.NODE_ENV} </h3>
      </header>
    </div>
  );
}

export default App;
