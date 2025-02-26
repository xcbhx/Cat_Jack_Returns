import './App.css';
import Title from './Components/Title/Title';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Disclaimer from './Components/Disclaimer/Disclaimer';


function App() {
  return (
    <div className="App">
      <Title />
      <Login />
      <Register />
      <Disclaimer />
    </div>
  );
}

export default App;
