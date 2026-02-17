import './App.css'
import {coursesTitleArray} from "./data/arrays.ts";

function App() {


    return (
        <>
            <ul className="bg-blue-300 border-zinc-700 p-10 rounded-2xl shadow-xl">
                {coursesTitleArray.map((coursesTitle, index) => <li key={index} className="font-mono text-2xl text-gray-900 text-left mx-4">{coursesTitle}</li>)}
            </ul>
        </>
    )
}

export default App
