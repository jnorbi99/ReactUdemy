import { NavLink } from 'react-router-dom'

import classes from './MainHeader.module.css'

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink
              classname={(navData) => (navData.isActive ? classes.active : '')}
              to='/welcome'
            >
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink
              classname={(navData) => (navData.isActive ? classes.active : '')}
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

export default MainHeader
