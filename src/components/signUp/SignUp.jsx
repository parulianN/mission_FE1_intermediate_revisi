import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './SignUp.css'

const SignUp = () => {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();

      if (password !== confirmpassword) {
        setError('Password dan Konfirmasi Password tidak cocok!');
        return;
      }

      setError('');
      setIsLoading(true);

      // Menyimpan data di localStorage
      try {
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        // Cek apakah username sudah ada
        const userExists = existingUsers.find((user) => user.username === username);

        if (userExists) {
            setError('Username sudah terdaftar!');
            setIsLoading(false);
            return;
        }

        // Tambahkan pengguna baru ke localStorage
        const newUser = { username, password,  };
        existingUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(existingUsers));

        console.log('User registered:', newUser);

        navigate('/');
        } catch (err) {
            setError('Gagal menyimpan data.');
        } finally {
            setIsLoading(false);
        }
        // Redirect atau tampilkan pesan sukses setelah registrasi berhasil
    };

  return (
    <>
        <div className="loginBody">
            <form onSubmit={handleSubmit} className="loginContainer">
                <div className="loginWrapper">
                    <img src='src/assets/icons/LogoChill.png' alt=''/>
                    <div className="greeting">
                        <h3>Masuk</h3>
                        <p>Selamat datang kembali!</p>
                    </div>
                    <div className='loginForm'>
                        <div className="usernameInput">
                            <label htmlFor='username'>Username</label>
                            <div className='inputWrapper'>
                                <input 
                                    type="text"
                                    id='username'
                                    placeholder='Masukan username'
                                    value={username}
                                    onChange={(e) => setUserName(e.target.value)}
                                    required
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
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <img src="src/assets/icons/eye-off.png" alt="" />
                            </div>
                        </div>
                        <div className="passwordInput">
                            <label htmlFor='password'>Konfirmasi Kata Sandi</label>
                            <div className='inputWrapper'>
                                <input 
                                    type="password"
                                    id='confirmpassword'
                                    placeholder='Masukan kata sandi'
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                                <img src="src/assets/icons/eye-off.png" alt="" />
                            </div>

                            {error && <p className="error">{error}</p>}

                            <div className="signUpLink">
                                <p>Sudah punya akun?<Link to="/">Masuk</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="button">
                        <button className="loginButton"   type="submit" disabled={isLoading}>
                            {isLoading ? 'Mendaftar...' : 'Daftar'}
                        </button>
                        <p>Atau</p>
                        <a href="">
                            <button className='googleButton'><img src="src/assets/icons/google.png" alt="" /><span>Daftar dengan Google</span></button>
                        </a>
                    </div>
                </div>
            </form>
        </div>
    </>
  )
}

export default SignUp