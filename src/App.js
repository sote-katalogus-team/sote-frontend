import './App.css';
import Routes from './routes';

function App() {
    const url = process.env.REACT_APP_URL;

    return (
    <div className="App">
        <h1>current backend url:{url}</h1>
      <Routes />
    </div>
  );
}

export default App;
