
import './App.css';
import {LeftBranch} from "./components/LeftBranch.tsx";
import {RightBranch} from "./components/RightBranch.tsx";
import {MyContext} from "./context/MyContext.tsx";
import {useState} from "react";

function App() {
    //створюємо стейт App
    const [counter, setCounter] = useState<number>(0);
    //огортаємо всі дочірні компоненти в MyContext.Provider з дефолтним значенням
    //в якості counterValue передаємо змінну стейту counter
    //визначаємо функцію increment, яка буде збільшувати змінну стейту на 1
    return (
        <>

            <MyContext.Provider value={{
                counterValue: counter,
                increment: (obj) => {
                    setCounter(++obj);
                }
            }}>

                <LeftBranch/>
                <RightBranch/>
            </MyContext.Provider>

        </>
    );
}

export default App
