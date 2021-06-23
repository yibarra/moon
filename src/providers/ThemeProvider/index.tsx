import React, { createContext, FC, useState, useCallback } from 'react';

import { IThemeContext, IThemeProvider } from './interfaces';

// theme context
const ThemeContext: any = createContext({} as IThemeContext);

// theme provider
const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  const [ theme, set ]: any = useState({ main: '#262B2F', second: '#F2F3F5' });

  // set
  const setColors = useCallback((main: string, second: string) => 
    set({ main, second }), [ set ]);

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