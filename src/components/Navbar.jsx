import React from 'react'
import styles from './Navbar.module.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { userAuthentication} from '../hooks/userAuthentication'
import { userAuthValue } from '../context/AuthContext'

const Navbar = () => {

  const { user } = userAuthValue()
  const { logout } = userAuthentication()
  const navigate =  useNavigate();

  return (
    <>
      <nav className={styles.navbar}>
          <NavLink to='/' className={styles.brand}>
            MiniBlog <span>Dev</span>
          </NavLink>
          <ul>
            <li>
              <NavLink to='/' className={({isActive}) => (isActive ? styles.active : null)}>
              Home
              </NavLink>
            </li>
            {!user && (
              <>
              <li>
                <NavLink to='/login' className={({isActive}) => (isActive ? styles.active:null)} >
                  Login
                </NavLink>
              </li>
              </>
            )} {user && (
              <>
              <li>
                <button className={styles.logout} onClick={logout}>Exit</button>
              </li>
              </>
            )}
          </ul>
      </nav>
    </>
  )
}

export default Navbar