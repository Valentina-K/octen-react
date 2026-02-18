import './App.css'
import {FamilyComponent} from "./components/FamilyComponent/FamilyComponent.tsx";
import {simpsons} from "./data/arrays.ts";

function App() {


  return (
      <>
          <FamilyComponent family={simpsons}/>
      </>
  )
}

export default App
