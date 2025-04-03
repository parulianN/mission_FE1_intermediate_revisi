import HomeCard from "./HomeCard"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = ({items}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <>
        <div className="homeContainer">
            <Slider {...settings}>
                {items.map((item) => {
                    return(
                            <HomeCard key={item.id} item={item}/>
                    )
                })}
            </Slider>
        </div>
    </>
  )
}

export default Home