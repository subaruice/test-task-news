import { Route, Routes } from "react-router"
import Layout from "./pages/Layout"
import Homepage from "./pages/Homepage"
import ArticlePage from "./pages/ArticlePage"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
            <Route index element={<Homepage/>}/>
            <Route path="category/:categoryName" element={<Homepage/>}/>
            <Route path="article/:articleID" element={<ArticlePage/>}/> 
      </Route>
    </Routes>
  )
}

export default App
