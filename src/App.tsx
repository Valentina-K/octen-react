import './App.css'
import {Outlet} from "react-router";
import {MainMenu} from "./layout/MainMenu.tsx";

function App() {


  return (
      <>
            <MainMenu />
          <Outlet />
      </>
  )
}

export default App
