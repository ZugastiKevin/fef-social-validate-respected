import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  let returning = localStorage.getItem('ifThemed')

  if (returning === "true" || returning === "false") {
    returning = JSON.parse(returning);
  } else {
    returning = true;
  }

  const [theme, setTheme] = useState(returning);

  let toggleTheme = () => {
    localStorage.setItem('ifThemed', JSON.stringify(!theme))
    setTheme(!theme);
  }
  
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider;