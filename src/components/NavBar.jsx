import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='header'>
            <Link to='/' className='link'>React Auth</Link>
            <h2>TestUser@gmail.com</h2>
            <ul>
                <li>
                    <NavLink to='/'className='link'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/contacts' className='link'>Contacts</NavLink>
                </li>
                <li>
                    <NavLink to='/register' className='link'>Register</NavLink>
                </li>
                <li>
                    <NavLink to='/login' className='link'>Login</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavBar