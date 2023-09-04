import reactLogo from '../assets/react.svg'
function Header(){
    return(
        <header>
            <div className="header">
            <div className="logo">
            <img src={reactLogo} alt="Логотип" />
        </div>
             <nav>
        <ul>
            <li><a href="#">Main</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Offers</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
            </div>
            
    <h1>Main page</h1>
             </header>
    )
}
export default Header;
