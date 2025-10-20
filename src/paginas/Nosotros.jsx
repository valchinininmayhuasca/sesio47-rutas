import { useTheme } from "../context/themeContext"

export function Nosotros(){

    const { theme } = useTheme();
    return(
        <div className={theme === "dark" ? "min-h-dvh bg-gray-900 text-white" : "min-h-dvh bg-white text-gray-900"}>
            <h1>Nosotros</h1>

        </div>
        
    )
}
