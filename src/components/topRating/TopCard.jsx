
const TopCard = ({item: {id, cover,} }) => {
  return (
    <>
        <div className="filmBox">
            <div className="filmImg">
                <img src={cover} alt="" />
            </div>
            <div className="actionButton">
              <button><img src="src/assets/icons/play-button.png" alt="" /></button>
              <button type="submit"><img src="src/assets/icons/add.png" alt="" /></button>
            </div>
        </div>
    </>
  )
}

export default TopCard