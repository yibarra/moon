import React, { createContext, FC } from 'react';

// context
const ThemeContext = createContext({});

// theme provider
const ThemeProvider: FC<any> = ({ children }) => {
  // return
  return (
    <ThemeContext.Provider
      value={{

      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;