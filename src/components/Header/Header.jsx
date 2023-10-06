import { Link, NavLink } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav>
                <span>My Fucking Website</span> <br />
                <Link to="/" >Home</Link>
                <NavLink to="/users">User</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact US</NavLink>
                
            </nav>
        </div>
    );
};

export default Header;