import './App.css';
import Routes from './components/Routes';
import Context from './context';

function App() {
  return (
    <Context>
      <Routes />
    </Context>
  );
}

export default App;
