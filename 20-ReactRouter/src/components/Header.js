import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'

const Header = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul className={classes.ul}>
          <li className={classes.li}>
            <NavLink
              activeClassName={classes.active}
              className={classes.a}
              to='/welcome'
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={classes.active}
              className={classes.a}
              to='/products'
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
