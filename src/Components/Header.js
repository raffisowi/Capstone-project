import restaurant from '../resources/restaurant.jpg';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';

function Header(){
    const navigate = useNavigate();

    const handleReserveClick = () => {
        navigate('/reservations');
    }
    return (
        <header className='header'>
            <div className='header-content'>
            <h1>Little Lemon</h1>
            <h3>Next store in Frankfurt...</h3>
            <button  className='reserve-btn' onClick={handleReserveClick}>Reserve</button>
            </div>
            <div className='header-image'>
            <img src={restaurant} alt='Restaurant Logo' width={360} height={240} /> 
            </div>
        </header>
        
    );
}

export default Header;