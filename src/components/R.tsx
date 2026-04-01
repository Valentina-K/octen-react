import {useContext} from "react";
import {ThemeContext} from "../context/themeContext.ts";

export const R = () => {
    const {theme, changeTheme} = useContext(ThemeContext);
    let className = theme === "dark" ? "light" : "dark";
    const handler = () =>{
        if (theme === 'dark') {
            changeTheme('light');
            className = 'dark';
        }
        else {
            changeTheme('dark');
            className = 'light';
        }
    }
    return (
        <div className={className}>
            <button className={'w-1/2 text-3xl bg-pink-300 mt-40 border rounded-xl p-20'} onClick={handler}>Change Theme</button>
        </div>
    );
};