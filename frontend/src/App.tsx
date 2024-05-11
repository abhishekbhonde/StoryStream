import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from "./Pages/SignUp.js";
import SignIn from "./Pages/SignIn.js";
import Blog from "./Pages/Blog.js";
function App() {


  return (
    <>
     <BrowserRouter>
        <Routes>
              <Route path="/signup" element={<SignUp/>}>SignUp</Route>
              <Route path="/signin" element={<SignIn/>}>SigIn</Route>
              <Route path="/blog:id" element={<Blog/>}>Blog</Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
