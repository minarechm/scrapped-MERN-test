import { Link } from "react-router-dom"
import { Toolbar } from '@mui/material';

const Navbar = () => {
    const user = null

    const logout = () => {
        console.log("Log user out")
    }
    return (
        <Toolbar>
            <nav>
                <div>
                    <Link to="/">Homepage</Link>
                </div>
                {user && ( 
                    <ul className="navbar-list">
                        <span>Welcome, {user.name}</span>
                        <button onClick={logout}>Log out.</button>
                    </ul>
                )} 
                {!user && (
                    <ul className="navbar-list">
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                    </ul>
                )}
            </nav>
        </Toolbar>

    )
}

export default Navbar