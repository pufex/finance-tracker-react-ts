import { createContext, useContext, useEffect, useState } from "react"

export type ThemesTypes = "light" | "dark"

export type ChangeThemeFunction = (theme: ThemesTypes) => void

export type ThemeContextType = {
    theme: ThemesTypes,
    changeTheme: ChangeThemeFunction,
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export const useTheme = () => {
    const themes = useContext(ThemeContext)
    if(!themes) throw new Error("useTheme must be used within a provider.")
    else return themes;
}

type ThemeProviderProps = {
    children: React.ReactNode | (() => React.ReactNode)
}

const ThemeProvider = ({
    children,
}: ThemeProviderProps) => {

    const [theme, setTheme] = useState<ThemesTypes>("light")

    const changeTheme: ChangeThemeFunction = (theme) => {
        setTheme(theme);
    }

    useEffect(() => {
        const body = document.querySelector("body")!;
        body.setAttribute("class", "");
        body.classList.add(theme);
    }, [theme])

    const value = {
        theme,
        changeTheme,
    }

    return <ThemeContext.Provider value={value}>
        {
            children instanceof Function
                ? children()
                : children
        }
    </ThemeContext.Provider>
}

export default ThemeProvider
