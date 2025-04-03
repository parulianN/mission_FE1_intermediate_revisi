
const Ccard = ({item: {id, title, cover, rating}}) => {
  return (
    <>
        <div className="movieBox">
            <div className="movieImg">
                <img src={cover} alt="" />
            </div>
            <div className="movieInfo">
                <h6>{title}</h6>
                <div className="cRating">
                        <img src="src/assets/icons/bintang.png" alt="" />
                        <p>{rating}</p>                       
                </div>
            </div>
        </div>
    </>
  )
}

export default Ccard