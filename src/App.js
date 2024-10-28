import './styles/App.css';
import Nav from './Components/Nav.js';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Reservations from './Pages/Reservations.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' />
        <Route path='/reservations' element={<Reservations />} />
        <Route path='/order' />
        <Route path='/login' />
        </Routes>
    </div>
      

  );
}

export default App;
