import { useState } from "react";
import { continueData, myList, newData, topData, trendingData } from '../home/HomeData'
import ContinueWatched from "../continueWatching/ContinueWatched"
import Homes from "../home/Homes"
import TopRating from "../topRating/TopRating"


const FilmPage = () => {
    const [items, setItems] = useState(continueData);
      const [topItems, setTopItems] = useState(topData);
      const [trendingItems, setTrendingItems] = useState(trendingData);
      const [newItems, setNewItems] = useState(newData);
  return (
    <>
        <Homes/>
        <ContinueWatched items={items} title='Continue Watching'/>
        <TopRating  items={topItems} title ='Series Persembahan Chill'/>
        <TopRating  items={trendingItems} title ='Top Rating Series Hari ini'/>
        <TopRating  items={newItems} title ='Tranding'/>
        <TopRating  items={newItems} title ='New Release'/>
    </>
  )
}

export default FilmPage