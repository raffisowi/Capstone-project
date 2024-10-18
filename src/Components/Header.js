import appleLogo from '../resources/appleLogo.png';

function Header(){
    return (
        <header>
            <img src={appleLogo} alt='Apple Logo' width={360} height={240} /> <br></br>
            Welcome to my site!
        </header>
        
    );
}

export default Header;