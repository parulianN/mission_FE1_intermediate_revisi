import { useState } from "react";
import { continueData, myList, newData, topData, trendingData } from "./HomeData"
import ContinueWatched from "../continueWatching/ContinueWatched"
import Homes from "./Homes"
import TopRating from "../topRating/TopRating";
import { useNavigate } from 'react-router-dom';




const HomePage = () => {
  const [items, setItems] = useState(continueData);
  const [topItems, setTopItems] = useState(topData);
  const [trendingItems, setTrendingItems] = useState(trendingData);
  const [newItems, setNewItems] = useState(newData);


  

  return (
    <>
      <Homes/>
      <ContinueWatched items={items} title='Continue Watching'/>
      <TopRating  items={topItems} title ='Top Rating'/>
      <TopRating  items={trendingItems} title ='Trending'/>
      <TopRating  items={newItems} title ='New Release'/>
    </>
  )
}

  
export default HomePage