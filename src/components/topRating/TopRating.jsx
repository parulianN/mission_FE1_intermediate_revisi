
import TopCard from "./TopCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const TopRating = ({items, title, }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow:5,
        slidesToScroll:1,
        responsive: [
            { 
              breakpoint: 768, 
              settings: {
                slidesToShow: 3,  
                slidesToScroll: 1,
                arrows: false,
              }
            },
            
        ]
      };
  return (
    <>
        <section className="top">
            <div className="topContainer">
                <div className="cTitle">
                    <h2>{title}</h2>
                </div>
                <div className="tContent">
                    <Slider {...settings} className="tSlider"> 
                        {items.map ((item) => {
                            return (
                                    <TopCard key={item.id} item={item} className='movieCard'/> 
                            ) 
                        })}
                    </Slider>
                </div>
            </div>
        </section>
    </>
  )
}

export default TopRating