

const HomeCard = ({item: {id, title, cover, desc}}) => {
  return (
    <>
    <div>
        <div className="box">
            <div className="coverImage">
                <img src={cover} alt='' />
            </div>
            <div className="content">
                <h1>{title}</h1>
                <p>{desc}</p>
                <div className="buttonHero">
                    <div className="playButton">
                        <button className="play">Mulai</button>
                        <button className="selengkapnya"><img src="src/assets/icons/info.png" alt="" />Selengkapnya</button>
                        <p>18+</p>
                    </div>
                    <div className="volumeButton">
                        <button><img src="src/assets/icons/Vector.png" alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default HomeCard