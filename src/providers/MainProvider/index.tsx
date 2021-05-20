import React, { createContext, FC, useState } from 'react';
import { format } from 'date-fns';

import ThemeProvider from '../ThemeProvider';

import { IMainContext } from './interfaces';

// context
const MainContext = createContext({} as IMainContext);

// main provider
const MainProvider: FC<any> = ({ children }) => {
  // current date
  const [ date ] = useState<any>(format(new Date(), 'yyyy-MM-dd'));

  // main provider
  return (
    <MainContext.Provider
      value={{
        date
      }}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
    </MainContext.Provider>
  );
};

export { MainContext, MainProvider };
export default MainProvider;