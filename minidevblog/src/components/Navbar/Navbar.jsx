import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useAuthValue } from "../../context/AuthContext";
import { userAuthentication } from "../../hooks/userAuthentication";

const navbar = () => {
  const { user } = useAuthValue();
  const { logout } = userAuthentication();
  const navigate = useNavigate();
  return (
    <>
      <nav className={styles.navbar}>
        <NavLink to="/" className={styles.brand}>
          MiniDevBlog
        </NavLink>
        <ul className={styles.links_list}>
          {!user && (
            <>  
              <li>
                <NavLink
                  to="/login"
                  className={(isActive) => (isActive ? styles.active : null)}
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className={(isActive) => (isActive ? styles.active : null)}
                >
                  Register
                </NavLink>
              </li>
            </>
          )}
          {user && (
            <>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? styles.active : null
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={(isActive) => (isActive ? styles.active : null)}
                >
                  About
                </NavLink>
              </li>
            </>
          )}
          {user && (
            <li>
              <button onClick={logout} className={styles.logout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default navbar;
