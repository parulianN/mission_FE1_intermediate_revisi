import { Link, useNavigate  } from 'react-router'

import './Login.css'
import { useState } from 'react';
const Login = () => {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError('');
    

    // Mengambil data user yang sudah terdaftar dari localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Mencari user yang cocok dengan input username dan password
    const user = existingUsers.find((user) => user.username === username && user.password === password);

    if (user) {
      console.log('Login successful!');
      navigate('/homepage'); 
    } else {
      setError('Username atau Password salah!');
    }

    setIsLoading(false);
  };
  return (
    <>
        <div className="loginBody">
            <form onSubmit={handleLogin} className="loginContainer">
                <div className="loginWrapper">
                    <img src='src/assets/icons/LogoChill.png' alt=''/>
                    <div className="greeting">
                        <h3>Masuk</h3>
                        <p>Selamat datang kembali!</p>
                    </div>
                    <div  className='loginForm'>
                        <div className="usernameInput">
                            <label htmlFor='username'>Username</label>
                            <div className='inputWrapper'>
                                <input 
                                    type="text"
                                    id='username'
                                    placeholder='Masukan username'
                                    value={username}
                                     onChange={(e) => setUserName(e.target.value)}
                                    />
                                </div>
                        </div>
                        <div className="passwordInput">
                            <label htmlFor='password'>Kata Sandi</label>
                            <div className='inputWrapper'>
                                <input 
                                    type="password"
                                    id='password'
                                    placeholder='Masukan kata sandi'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <img src="src/assets/icons/eye-off.png" alt="" />
                            </div>
                            <div className="signUpLink">
                                <p>Belum punya akun?<Link to="/signup">Daftar</Link></p>
                                <a href="">Lupa kata sandi?</a>
                            </div>
                        </div>
                    </div>

                    {error && <p className="error">{error}</p>}

                    <div className="button">
                        <button className="loginButton" type="submit" disabled={isLoading}>
                         {isLoading ? 'Masuk...' : 'Masuk'}
                        </button>
                        {/* <Link to ="/homepage">                        
                            <button className='loginButton'>Masuk</button>
                        </Link> */}
                        <p>Atau</p>
                        <a href="">
                            <button className='googleButton'><img src="src/assets/icons/google.png" alt="" /><span>Masuk dengan Google</span></button>
                        </a>
                    </div>
                </div>
            </form>
        </div>
    </>
  )
}

export default Login