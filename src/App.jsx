import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./User/Layout/Layout"
import Home from "./User/Home/Home"
import About from "./User/About/About"
import SingleBlog from "./User/Blog/SingleBlog"
import AdminBlogs from "./Admin/Home/AdminBlogs"
import AdminLayout from "./Admin/Home/AdminLayout"
import AddBlog from "./Admin/Blog/Addblog"
import Editblog from "./Admin/Blog/Editblog"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="blog/:id" element={<SingleBlog/>}/>
        </Route>

          
        <Route path="/admin/" element={<AdminLayout/>}>
          <Route path="home" element={<AdminBlogs/>}/>
          <Route path="add" element={<AddBlog/>}/>
          <Route path="edit/:id" element={<Editblog/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
