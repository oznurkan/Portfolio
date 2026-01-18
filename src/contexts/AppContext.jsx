import { createContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";


const AppContext = createContext();

export const AppProvider = ({children}) => {


    const [ lang, setLang ] = useLocalStorage("lang", "en")
    const [ mode, setMode ] = useLocalStorage("mode", "light")

   useEffect(() => {
  if (mode === "dark") {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}, [mode]); 

const handleToggleMode = () => {
  setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
};
    const handleLang = () => {
        const nextLang = lang === "en" ? "tr" : "en";
        setLang(nextLang);
    };

    return(
        <AppContext.Provider value={{ handleToggleMode, handleLang, mode, lang}}>
            {children}
        </AppContext.Provider>
    )

}

export default AppContext;