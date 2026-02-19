import {coursesArray} from './data/arrays.ts';
import './App.css';
import {CoursesComponent} from "./components/CousesComponent/CoursesComponent.tsx";

function App() {


  return (
      <>
          <CoursesComponent courses={coursesArray} />
      </>
  )
}

export default App
