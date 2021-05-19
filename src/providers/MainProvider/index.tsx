import React, { createContext, FC } from 'react';
import ThemeProvider from '../ThemeProvider';

// context
const MainContext = createContext({});

const MainProvider: FC<any> = ({ children }) => {
  //

  // main provider
  return (
    <MainContext.Provider
      value={{

      }}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
    </MainContext.Provider>
  );
};

export default MainProvider;