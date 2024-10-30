import './styles/App.css';
import Nav from './Components/Nav.js';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Reservations from './Pages/Reservations.js';
import Menu from './Pages/Menu.js';
import OrderOnline from './Pages/OrderOnline.js';
import Login from './Pages/Login.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/reservations' element={<Reservations />} />
        <Route path='/order' element={<OrderOnline />}/>
        <Route path='/login' element={<Login />} />
        </Routes>
    </div>
      

  );
}

export default App;
