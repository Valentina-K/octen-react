import './App.css'
//import {Products} from "./components/products/Products.tsx";
import {Menu} from "./components/menu/Menu.tsx";
import {Outlet} from "react-router-dom";
//import {Todos} from "./components/todos/Todos.tsx";
//import {Comments} from "./components/comments/Comments.tsx";
//import {Posts} from "./components/posts/Posts.tsx";

function App() {


  return (
      <>
        <Menu />
          <Outlet/>
      </>
  )
}

export default App
