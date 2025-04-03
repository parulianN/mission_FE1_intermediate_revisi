import './profile.css'
import ProfileUser from './ProfileUser'


const Profile = () => {
  return (
    <>
        <div className="profileContainer">
            <div className="profileContent">

                <h3 className='profileTitle'>Profil Saya</h3>

                <div className="accountWrapper">
                    <div className="userInfo">
                        <div className="userPic">
                            <img src="src/assets/icons/userpicture.png" alt="" />
                            <div className="changePic">
                                <button type="submit" className="buttonChange">Ubah Foto</button>
                                <div className="infoPic">
                                    <img src="src/assets/icons/Upload.png" alt="" />
                                    <p>Maksimal 2MB</p>
                                </div>
                            </div>
                        </div>
                        <div className="userName">
                            <div className="dataName">
                                <label htmlFor="nama">Nama Pengguna</label>
                                <input type="text" id="nama" />
                            </div>
                            <img className="editIcon" src="src/assets/icons/Edit.png" alt="" />
                        </div>
                        <div className="userEmail">
                            <div className="email">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" />
                            </div>
                            <img className="editIcon" src="src/assets/icons/Edit.png" alt="" />
                        </div>
                        <div className="userPassword">
                            <div className="Password">
                                <label htmlFor="nama">Kata Sandi</label>
                                <input type="text" id="dataPassword" />
                            </div>
                            <img className="editIcon" src="src/assets/icons/Edit.png" alt="" />
                        </div>
                    </div>
                    <div className="premiumAds">
                        <div className="adsText">
                            <img src="src/assets/icons/Warning.png" alt="" />
                            <div className="descText">
                                <h3 id='ads'>Saat ini anda belum berlangganan</h3>
                                <p>Dapatkan Akses Tak Terbatas Ke Ribuan Film Dan Series Kesukaan Kamu!</p>
                            </div>
                        </div>
                        <button type="submit" className="buttonPremium">Mulai Berlangganan</button>
                    </div>
                </div>

                <button type="submit" className="buttonSave">Simpan</button>

            </div>
        </div>
        <ProfileUser/>
    </>

  )
}

export default Profile