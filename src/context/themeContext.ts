import {createContext} from "react";
type ThemeContextProps = {
    theme: string;
    changeTheme: (theme: string) => void;
}
export const ThemeContext = createContext<ThemeContextProps>({
    theme: 'dark',
    changeTheme: (value: string) => {
        console.log(value);
    },
})