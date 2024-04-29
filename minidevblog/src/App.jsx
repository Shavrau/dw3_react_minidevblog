import React ,{ useState, useEffect } from 'react'
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase/config'
import { BrowserRouter as Router, Route, Navigate,Routes} from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { userAuthentication } from './hooks/userAuthentication'
import { AuthProvider } from './context/AuthContext'

import './App.css'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import About from './pages/About/About'
import Register from './pages/Register/Register'
import Dashboard from './pages/Dashboard/Dashboard'
import CreatePost from './pages/CreatePost/CreatePost'
import Login from './pages/Login/Login'
import loading from './assets/loading.gif'

const app = initializeApp(firebaseConfig);

const App = () => {

  const [user, setUser] = useState(null)
  const { auth } = userAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setUser(user)
    })

  return () => {
    unsubscribe()
  }
}, [auth])

if (loadingUser) {
  return (<div className="loading">
    <img src={loading} alt="Loading" />
  </div>)
}
  
    return (
      <div className="Blog"> 
      <AuthProvider value={{ user }}>
        <Router>
          <Navbar />
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/create-post" element={<CreatePost />} />
              </Routes>
            </div>  
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  )
}

export default App
