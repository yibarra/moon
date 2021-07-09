import React, { createContext, FC, useEffect, useState } from 'react';
import { format, parse } from 'date-fns';
import WebFontLoader from "webfontloader";

import UseWindowSize from '../../uses/useWindowSize';

import { IMainContext, IMainProvider } from './interfaces';

// main context
const MainContext = createContext({} as IMainContext);

// main provider
const MainProvider: FC<IMainProvider> = ({ children }) => {
  const form: string = 'yyyy/MM/dd';
  const size = UseWindowSize();
  
  const [ animate, setAnimate ] = useState<boolean>(true);
  const [ date, set ] = useState<Date>(parse(format(new Date(), form), form, new Date()));
  const [ loaded, setLoaded ] = useState<boolean>(false);
  const [ radius, setRadius ] = useState<number>(110);
  const [ pos, setPos ] = useState<any>({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [ scale, setScale ] = useState<number>(0.9);

  // Handle loading effects.
  useEffect(() => {
    // Fetch necessary fonts.
    WebFontLoader.load({
      google: {
        families: [
          "Roboto Condensed:300,400,700",
          "Roboto Slab:300,400,500,600"
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
        setDate: set,
        animate,
        setAnimate,
        date,
        loaded,
        radius,
        setRadius,
        scale,
        setScale,
        size,
        pos,
        setPos
      }}>
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainProvider };
export default MainProvider;