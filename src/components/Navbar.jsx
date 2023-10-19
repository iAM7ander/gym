import {Link, NavLink} from 'react-router-dom'

import './navbar.css'
import Logo from '../images/logo.png'
import {links} from '../data'


const Navbar = () => {
  return (
    <nav>
        <div className="container nav_container">
            <Link to={"/"} className='logo'>
                <img src={Logo} alt="Nav Logo"/>
            </Link>
            <ul className='nav_links'>
              {
                  links.map(({name, path}, index) => {
                      return(
                        <li>
                            <NavLink to={path}>{name}</NavLink>
                        </li>
                      )
                  })
              }
            </ul>
            <button className="nav_toggle-btn">
              
            </button>
        </div>
    </nav>
  )
}

export default Navbar