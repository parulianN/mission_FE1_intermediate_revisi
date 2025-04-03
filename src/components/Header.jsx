import { useRef, useState } from 'react'
import './header.css'
import { Link } from 'react-router-dom'

function Header() {

    const [open, setOpen] = useState(false)

    const menuRef = useRef();
    const imgRef = useRef();

    window.addEventListener("click", (e) => {
        if (e.target !== menuRef.current && e.target !== imgRef.current) {
            setOpen(false);
        }
        })
    const handleAlert = () => {
        alert('Belum Jadi!');
    }

  return (
    <>
        <header>
            <div>
                < nav className='containerHeader'>
                    <div className="logo">
                        <ul className='navbarList'>
                            <Link to="/homepage"><img src='src/assets/icons/LogoChill.png' alt='logo' className='logoChill'/></Link>
                            <Link to="/series" className='navbarLink'>Series</Link>
                            <Link to="/film" className='navbarLink'>Film</Link>
                            <Link to="/daftarsaya" className='navbarLink' onClick={handleAlert}>Daftar Saya</Link>
                        </ul>
                    </div >
                    <button  className='userProfile' onClick={()=>setOpen(!open)}>
                        <img  src="src/assets/icons/pp.png" alt='pp'/>
                        <img 
                        ref={imgRef}
                        className='extended' 
                        src='src/assets/icons/profilExtended.png' alt='vector' 
                        />
                    </button>
                    {open && (
                    <div className="wrapProfile" ref={menuRef}>
                        <ul className='profileExtended'>
                            <div className='userSetting'>   
                                <img className='pIcon' src='src/assets/icons/user-24.png' alt='logout'/>
                                <Link to="/profile" >Profil Saya</Link>
                            </div>
                            <div className='userSetting'>
                                <img className='pIcon' src='src/assets/icons/star-24.png' alt='logout'/>
                                <p >Ubah Premium</p>
                            </div>
                            <div className='userSetting'>
                                <img className='pIcon' src='src/assets/icons/account-logout-24.png' alt='logout'/>
                                <Link to ='/'> Keluar </Link>
                            </div>
                        </ul>
                    </div>
                    )}
                </nav>
            </div>
        </header>
    </>
  )
}

export default Header