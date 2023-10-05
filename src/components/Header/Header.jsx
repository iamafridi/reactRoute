import { Link } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav>
                <span>My Fucking Website</span> <br />
                <Link to="/" >Home</Link>
                <Link to="/users" >User</Link>
                <Link to="/about" >About</Link>
                <Link to="/contact" >Contact US</Link>
                
            </nav>
        </div>
    );
};

export default Header;