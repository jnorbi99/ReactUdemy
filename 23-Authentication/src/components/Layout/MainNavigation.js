import { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../store/auth-context'

import classes from './MainNavigation.module.css'

const MainNavigation = () => {
  const ctx = useContext(AuthContext)
  const isLoggedin = ctx.isLoggedIn

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedin && (
            <li>
              <Link to='/auth'>Login</Link>
            </li>
          )}
          {isLoggedin && (
            <>
              <li>
                <Link to='/profile'>Profile</Link>
              </li>
              <li>
                <button onClick={ctx.logout}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
