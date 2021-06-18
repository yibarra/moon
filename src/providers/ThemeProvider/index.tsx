import React, { createContext, FC, useState, useCallback } from 'react';

import { IThemeContext, IThemeProvider } from './interfaces';

// theme context
const ThemeContext: any = createContext({} as IThemeContext);

// theme provider
const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  const [ theme, set ]: any = useState({ main: '#EADDC1', second: '#262B2F' });

  // set
  const setColors = useCallback(
    (main: string = '#EADDC1', second: string = '#262B2F') => set({ main, second })
  , [ set ]);

  // render
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setColors
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
export default ThemeProvider;