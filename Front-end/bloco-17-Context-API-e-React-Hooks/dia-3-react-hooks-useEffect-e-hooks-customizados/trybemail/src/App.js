import './App.css';
import logo from './assets/logo.png'
import Inbox from './components/Inbox';

function App() {
  return (
    <div className='App'>
      <header className="App-header">
        <img src={logo} width="250px" className="trybemail-logo" alt="logo" />
      </header>
      <Inbox />
    </div>
  );
}

export default App;
