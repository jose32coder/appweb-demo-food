import { useState } from "react"
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu"
import Header from "../../components/Header/Header"
import FoodList from "../../components/FoodList/FoodList"
import AppDownload from "../../components/AppDownload/AppDownload"


function Home() {

  const [category, setCategory] = useState('All')

  return (
    <div className="pt-32">
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodList category={category}/>
        <AppDownload/>
    </div>
  )
}

export default Home