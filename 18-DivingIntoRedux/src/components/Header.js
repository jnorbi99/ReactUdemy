import classes from './Header.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { loginActions } from '../store/auth'

const Header = () => {
  const dispatch = useDispatch()

  // Ha tobb slice van odaadva a configureStore() nak, akkor igy kell hicatkozni az egyes statekre
  const login = useSelector((state) => state.login.isLoggedIn)

  const logoutHandler = () => {
    dispatch(loginActions.logout())
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {login && (
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  )
}

export default Header
