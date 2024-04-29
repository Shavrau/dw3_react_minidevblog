import { userAuthentication } from '../../hooks/userAuthentication'
import React ,{ useState } from 'react'
import styles from './Register.module.css'

const Register = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [error, setError] = useState('')

  const { createUser, error: authError, loading } = userAuthentication()


  const handlerSubmit = async (e) => {
    e.preventDefault()
    setError('')

    const user = {
      email,
      password,
      displayName
    }
    
    if (password.length < 6) {
      setError('A senha deve ter no mínimo 6 caracteres')
      return
    }

    if (password !== confirmPassword) {
      setError('As senhas não conferem')
      return  
    }
    
    try {
      await createUser(user)
    } catch (err) {
      setError('Erro ao criar usuário')
    }
  }

  return (
    <div className={styles.register}>
      <h1>Registre-se</h1>

    <form onSubmit={handlerSubmit} >
      <label className={styles.label}>
        <span>Email:</span>
        <input 
        type="email" 
        name="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Entre seu email"
        className={styles.input}
        ></input>
      </label>
      <label>
        <span>Senha:</span>
        <input 
        type="password" 
        name="Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Entre sua senha"
        className={styles.input}
        ></input>
      </label>
      <label>
        <span>Confirme sua senha:</span>
        <input 
        type="password" 
        name="ConfirmPassword"
        required
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirme sua senha"
        className={styles.input}
        ></input>
      </label>
      <button className={styles.button}>Cadastrar</button>
      {error && <p>{error}</p>}
    </form>

    </div>
  )
}

export default Register