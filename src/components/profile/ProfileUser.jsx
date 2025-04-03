import { useState } from "react";
import { continueData, myList, newData, topData, trendingData } from "../home/HomeData"
import TopRating from "../topRating/TopRating";


const ProfileUser = () => {
    const [myItem, setMyItem] = useState(myList);

  return (
    <>
    <TopRating  items={myItem} title ='Daftar Saya'/>
    </>
  )
}

export default ProfileUser