import './App.css'
import {useState} from "react";
import {RightBar} from "./components/RightBar.tsx";
import {ThemeContext} from "./context/themeContext";
import {LeftBar} from "./components/LeftBar.tsx";



function App() {
    const [theme, setTheme] = useState('light');
    return (
        <ThemeContext.Provider value={{theme: theme, changeTheme:(value)=>setTheme(value)}}>
            <div className={'flex'}>
                <LeftBar/>
                <RightBar/>
            </div>
        </ThemeContext.Provider>
    );
}

export default App
