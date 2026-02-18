import './App.css'
import {CourseListComponent} from "./components/CourseListComponent/CourseListComponent.tsx";
import {coursesAndDurationArray} from "./data/arrays.ts";

function App() {


  return (
      <>
          <CourseListComponent courses={coursesAndDurationArray} />
      </>
  )
}

export default App
