import './App.css';
import Header from './components/Header';
import Paths from './components/Paths';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Paths/>
        {/* <Home/> */}
        {/* <Signup/> */}
        {/* <Login/> */}
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
