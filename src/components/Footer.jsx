
const Footer = () => {
  return (
    <>
        <footer>
            <div className="copyrightWrapper">
              <img src="src/assets/icons/LogoChill.png" alt="" />
              <p>@2023 Chill All Rights Reserved</p>
            </div>
            <div className="footerContent">
              <div className="genreWrapper">
                <p className="gTitle">Genre</p>
                <div className="listGenre">
                  <ul>
                    <li>Aksi</li>
                    <li>Anak-anak</li>
                    <li>Anime</li>
                    <li>Britania</li>
                  </ul>
                  <ul>
                    <li>Drama</li>
                    <li>Fantasi</li>
                    <li>KDrama</li>
                    <li>Kejahatan</li>
                  </ul>
                  <ul>
                    <li>Komedi</li>
                    <li>Petualangan</li>
                    <li>Perang</li>
                    <li>Romantis</li>
                  </ul>
                  <ul>
                    <li>Sci-Fi & Fantasi</li>
                    <li>Thriller</li>
                  </ul>
                </div>
              </div>
              <div className="genreWrapper">
                <p>Help</p>
                <div className="listGenre">
                  <ul>
                    <li>FAQ</li>
                    <li>Terms of Use</li>
                    <li>Privacy Policy</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
              </div>
            </div>
        </footer>
    </>
  )
}

export default Footer