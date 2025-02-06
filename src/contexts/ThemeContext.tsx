import React, { createContext, useState, PropsWithChildren, useContext } from "react";
import ThemeType from "../../styles/themeTipe";
import DARK_THEME from "../../styles/darkTheme";


export interface ThemeContextProps {
  theme: ThemeType;
  setTheme:(theme:ThemeType)=>void;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);

export function ThemeProvider({children}: PropsWithChildren){
  const[theme,setTheme] = useState<ThemeType>(DARK_THEME); //padrão

  return (
    <ThemeContext.Provider value={{theme,setTheme}}>{children}</ThemeContext.Provider>
  )

}

export function useTheme(){
  const context = useContext(ThemeContext);
  if(!context){
    throw new Error("Deu ruim");
  }
  return context;
}

