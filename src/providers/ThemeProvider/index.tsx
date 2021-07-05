import React, { createContext, FC, useState, useCallback } from 'react';
import { ThemeProvider as StyleProvider } from "styled-components";

import { IThemeContext, IThemeProvider } from './interfaces';

// theme context
const ThemeContext: any = createContext({} as IThemeContext);

// theme provider
const ThemeProvider: FC<IThemeProvider> = ({ children }) => {  
  const [ theme, set ]: any = useState({ main: '#EADDC1', second: '#262B2F' });

  // set
  const setColors = useCallback((main: string, second: string) => 
    set({ main, second }), [ set ]);

  // render
  return (
    <StyleProvider theme={theme}>
      <ThemeContext.Provider
        value={{
          theme,
          setColors
        }}>
        {children}
      </ThemeContext.Provider>
    </StyleProvider>
  );
};

export { ThemeContext, ThemeProvider };
export default ThemeProvider;