import React, { createContext, FC, useCallback, useEffect, useState } from 'react';
import { format, parse } from 'date-fns';
import WebFontLoader from "webfontloader";

import UseWindowSize from '../../uses/useWindowSize';

import { IMainContext, IMainProvider } from './interfaces';

// main context
const MainContext = createContext({} as IMainContext);

// main provider
const MainProvider: FC<IMainProvider> = ({ children }) => {
  const form: string = 'yyyy/M/dd';
  const size = UseWindowSize();

  const [ date, set ] = useState<any>(parse(format(new Date(), form), form, new Date()));
  const [ loaded, setLoaded ] = useState<boolean>(false);

  // set date
  const setDate = useCallback((value: Date) =>
    set(parse(format(value, form), form, new Date())), []);

  // Handle loading effects.
  useEffect(() => {
    // Fetch necessary fonts.
    WebFontLoader.load({
      google: {
        families: [
          "Roboto Condensed:300,400,700",
          "Roboto Slab:200,300,400,500,600",
          "Roboto:200,300,400"
        ]
      }, fontactive: () => {
        setTimeout(() => setLoaded(true), 500);
      }
    });
  }, []);

  // render
  return (
    <MainContext.Provider
      value={{
        date,
        loaded,
        setDate,
        size
      }}>
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainProvider };
export default MainProvider;