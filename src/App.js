import './App.css';
import Routes from './routes';

function App() {
    const url = process.env.REACT_APP_URL;

    return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
