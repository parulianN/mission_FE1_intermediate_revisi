import Ccard from "./Ccard"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ContinueWatched = ({items, title}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow:4,
        slidesToScroll:1,
        responsive: [
            {
              breakpoint: 768, 
              settings: {
                slidesToShow: 1,  
                slidesToScroll: 1,
                arrows: false,
              },
            },
          ],

      };
  return (
    <>
        <section className="continue">
            <div className="continueContainer">
                <div className="cTitle">
                    <h2>{title}</h2>
                </div>
                <div className="cContent">
                    <Slider {...settings} className="cSlider"> 
                        {items.map ((item) => {
                            return (
                                    <Ccard key={item.id} item={item}/> 
                            ) 
                        })}
                    </Slider>
                </div>
            </div>
        </section>
    </>
  )
}

export default ContinueWatched