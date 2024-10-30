import '../styles/Nav.css'
import {Link} from 'react-router-dom';
import navLogo from '../resources/Logo.svg';


function Nav(){
    
    return (
        <><nav className='main-nav'>
            <div className='nav-image'>
            <img src={navLogo} alt='Apple Logo' width={380} height={70} />
        </div>
                <Link to='/' className='nav-item'>Home</Link>
                <Link to='/about' className='nav-item'>About</Link>
                <Link to='/menu' className='nav-item'>Menu</Link>
                <Link to='/reservations' className='nav-item'>Reservations</Link>
                <Link to='/order' className='nav-item'>Order Online</Link>
                <Link to='/login' className='nav-item'>Login</Link>

            </nav></>
        
    );
};
export default Nav;


        