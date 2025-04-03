import { homeData } from "./HomeData";
import { useState } from "react";
import  Home  from "./Home";
import './home.css'

const Homes = () => {
    const [items, setItems] = useState(homeData);
  return (
    <>
        <section className="home">
          <Home items={items} />
        </section>
        <div className="margin"></div>
    </>
  )
}

export default Homes