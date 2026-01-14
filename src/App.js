import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to My Website</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => alert('Button clicked!')}>
          Click Me!
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="content-section">
        <h2>About This Site</h2>
        <p>This website uses a beautiful warm color palette.</p>
        <div className="highlight">
          <p>This is a highlighted section with our cream and peach colors!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
