import appleLogo from '../resources/appleLogo.png';
import '../styles/Header.css';

function Header(){
    return (
        <header className='header'>
            <img src={appleLogo} alt='Apple Logo' width={360} height={240} /> <br></br>
        </header>
        
    );
}

export default Header;