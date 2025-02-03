import logo from './assets/kintreelogo-adobe.png';
import './App.css';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className={"App font-face-alata"}>
      <NavBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Container">
          <p>
            Welcome to KinTree! This is the client side of the application. It's in progress.
          </p>
        </div>
        <a
          className="App-link"
          href="https://github.com/OwenAdams2023/SeniorProject_KinTree"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Repository
        </a>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
